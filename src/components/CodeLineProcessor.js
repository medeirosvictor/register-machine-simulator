export default function codeLineProcessor(codeLines, registers) {
    const result = [...registers]
    let isInsideIf = false

    for (let i = 0; i < codeLines.length; i++) {
        const currentLine = codeLines[i]
        const tokensArray = currentLine.match(/\w+/g);
        let register

        const command = tokensArray[0].replace(/\s/g, "");
        switch (command) {
            case 'inc':
                register = tokensArray[1].split('r')[1]
                result[register] += 1
                break;
            case 'dec':
                register = tokensArray[1].split('r')[1]
                result[register] -= 1
                break;
            case 'set0':
                register = tokensArray[1].split('r')[1]
                result[register] = 0
                break;
            case 'set':
                register = tokensArray[1].split('r')[1]
                let s = tokensArray[2].split('r')[1]
                result[register] = result[s]
                break;
            case 'add':
                register = tokensArray[1].split('r')[1]
                let adds = tokensArray[2].split('r')[1]
                result[register] = result[register] + result[adds]
                break;
            case 'if': {
                const condition = tokensArray[1]
                register = tokensArray[2].split('r')[1]
                const checkForDiff = condition.includes('not')
                if (!checkForDiff && result[register] === 0) {
                    isInsideIf = true
                } else if (checkForDiff && result[register] !== 0) {
                    isInsideIf = true
                } else {
                    const els = findNextElse(codeLines, i)
                    if (els > 0) {
                        i = els - 1
                        continue
                    } else {
                        i++
                    }
                }
                break;
            }
            case 'else':
                if (isInsideIf) {
                    isInsideIf = false
                    i++
                }
                break;
            case 'goto':
                i = parseInt(tokensArray[1], 10)
                break
            case 'init':
                register = tokensArray[1].split('r')[1]
                result[register] = parseInt(tokensArray[2], 10)
                break
        }
    }

    return result
}

function findNextElse(codeLines, currentLine) {
    for (let i = currentLine + 1; i < codeLines.length; i++) {
        const line = codeLines[i]
        const tokensArray = line.match(/\w+/g);
        const command = tokensArray[0].replace(/\s/g, "");
        if (command === 'if') {
            break
        }
        if (command === 'else') {
            return i
        }
    }

    return 0
}

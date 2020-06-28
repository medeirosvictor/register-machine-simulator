export default function codeLineProcessor(codeLines, registers) {
    let lineInterpreter = []
    let isInsideIf = false
    //Parse lines
    for(let i =0; i < codeLines.length; i++) {
        console.log(i)
        let currentLine = codeLines[i]
        let tokensArray = currentLine.match(/\w+/g);
        let register
        let condition
        
        let command = tokensArray[0].replace(/\s/g, "");
        switch (command) {
            case 'inc':
                register = tokensArray[1].split('r')[1]
                registers[register] += 1
                break;
            case 'dec':
                register = tokensArray[1].split('r')[1]
                registers[register] -= 1
                break;
            case 'set0':
                register = tokensArray[1].split('r')[1]
                registers[register] = 0
                break;
            case 'set':
                register = tokensArray[1].split('r')[1]
                let s = tokensArray[2].split('r')[1]
                registers[register] = registers[s]
                break;
            case 'add':
                register = tokensArray[1].split('r')[1]
                let adds = tokensArray[2].split('r')[1]
                registers[register] = parseInt(registers[register]) + parseInt(registers[adds])
                break;
            case 'if':
                //CHECK IF is true
                condition = tokensArray[1]
                register = tokensArray[2].split('r')[1]
                let checkForDiff = condition.includes('not')
                if (!checkForDiff && registers[register] == 0) {
                    isInsideIf = true
                } else if (checkForDiff && registers[register] != 0) {
                    //goto else
                    isInsideIf = true
                } else {
                    let els = findNextElse(codeLines, i)
                    if (els > 0) {
                        i = els - 1
                        continue
                    } else {
                        i++
                    }
                }
                break;
            case 'else':
                if(isInsideIf) {
                    isInsideIf = false
                    i++
                }
                break;
            case 'goto':
                i = parseInt(tokensArray[1])
                break
            case 'init':
                register = tokensArray[1].split('r')[1]
                let val = tokensArray[2]
                registers[register] = val
                break
        }
    }

    console.log(registers)
    return registers
}

function findNextElse(codeLines, currentLine) {

    for(let i =currentLine+1; i < codeLines.length; i++) {
        let currentLine = codeLines[i]
        let tokensArray = currentLine.match(/\w+/g);
        let command = tokensArray[0].replace(/\s/g, "");
        if(command === 'if') {
            break
        }
        if(command === 'else') {
            return i
        }
    }

    return 0
}
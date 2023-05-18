let boxes = Array.from(document.getElementsByClassName('aBox'))
let result = document.getElementById('result')
let PlayerX = document.getElementById('playerX')
let PlayerO = document.getElementById('playerO')
let again = document.getElementById('again')
let Owins = document.getElementById('Owins')
let Xwins = document.getElementById('Xwins')
let PvP = document.getElementById('PvP')
let easy = document.getElementById('easy')
let hard = document.getElementById('hard')
let mode = document.getElementById('mode')
let movecount = 9
PlayerO.classList.add('active')
let i = 1
let Owin_Count = 0
let Xwin_Count = 0

row0O = row1O = row2O = row0X = row1X = row2X = 3
col0O = col1O = col2O = col0X = col1X = col2X = 3
diag0O = diag1O = diag0X = diag1X = 3

function AddX(element) {
    let X = document.createElement('h3')
    X.classList.add('x')
    X.innerHTML = 'X'

    element.insertAdjacentElement('afterbegin', X)

    if (element.classList.contains('row0')) {
        row0X--;
    } else if (element.classList.contains('row1')) {
        row1X--;
    } else if (element.classList.contains('row2')) {
        row2X--;
    }
    if (element.classList.contains('col0')) {
        col0X--;
    } else if (element.classList.contains('col1')) {
        col1X--;
    } else if (element.classList.contains('col2')) {
        col2X--;
    }

    if (element.classList.contains('diag0')) {
        diag0X--;
    }
    if (element.classList.contains('diag1')) {
        diag1X--;
    }

    if (!(row0X && row1X && row2X && col0X && col1X && col2X && diag0X && diag1X)) {
        result.innerText = 'Player X Wins'
        result.style.display = 'block'
        again.style.display = 'block'
        Xwin_Count++;
    } else if (!(movecount)) {
        result.innerText = 'Draw!'
        result.style.display = 'block'
        again.style.display = 'block'
    }


}

function AddO(element) {
    let O = document.createElement('h3')
    O.classList.add('O')
    O.innerHTML = 'O'

    element.insertAdjacentElement('afterbegin', O)


    if (element.classList.contains('row0')) {
        row0O--;
    } else if (element.classList.contains('row1')) {
        row1O--;
    } else if (element.classList.contains('row2')) {
        row2O--;
    }
    if (element.classList.contains('col0')) {
        col0O--;
    } else if (element.classList.contains('col1')) {
        col1O--;
    } else if (element.classList.contains('col2')) {
        col2O--;
    }

    if (element.classList.contains('diag0')) {
        diag0O--;
    }

    if (element.classList.contains('diag1')) {
        diag1O--;
    }

    if (!(row0O && row1O && row2O && col0O && col1O && col2O && diag0O && diag1O)) {
        result.innerText = 'Player O Wins'
        result.style.display = 'block'
        again.style.display = 'block'
        Owin_Count++;
    } else if (movecount == 0) {
        result.innerText = 'Draw!'
        result.style.display = 'block'
        again.style.display = 'block'
    }

}


function computerMoveEasy() {
    let row0El = Array.from(document.getElementsByClassName('row0'))
    let row1El = Array.from(document.getElementsByClassName('row1'))
    let row2El = Array.from(document.getElementsByClassName('row2'))
    let col0El = Array.from(document.getElementsByClassName('col0'))
    let col1El = Array.from(document.getElementsByClassName('col1'))
    let col2El = Array.from(document.getElementsByClassName('col2'))
    let diag0El = Array.from(document.getElementsByClassName('diag0'))
    let diag1El = Array.from(document.getElementsByClassName('diag1'))

    let allArr = [row0El, row1El, row2El, col0El, col1El, col2El, diag0El, diag1El];
    let allVal = [row0X, row1X, row2X, col0X, col1X, col2X, diag0X, diag1X];
    let allOVal = [row0O, row1O, row2O, col0O, col1O, col2O, diag0O, diag1O];


    for (let k = 0; k < allOVal.length; k++) {
        const element = allOVal[k];

        if (element == 0) {
            return
        }


    }

    for (let j = 0; j < allArr.length; j++) {
        const arrElement = allArr[j];


        for (let index = 0; index < arrElement.length; index++) {

            let element = arrElement[index];


            if (allVal[j] == 1) {
                if (!(element.hasChildNodes())) {
                    return element
                }
            }


        }
    }

    for (let j = 0; j < allArr.length; j++) {
        const arrElement = allArr[j];


        for (let index = 0; index < arrElement.length; index++) {

            let element = arrElement[index];

            if (allVal[j] == 2) {
                if (!(element.hasChildNodes())) {
                    return element
                }
            }

        }
    }


    if (!(row1El[1].hasChildNodes())) {
        return row1El[1]
    }

    for (let j = 0; j < allArr.length; j++) {
        const arrElement = allArr[j];


        for (let index = 0; index < arrElement.length; index++) {

            let element = arrElement[index];


            if (!(element.hasChildNodes())) {
                return element
            }

        }
    }


}
function computerMoveHard() {
    let row0El = Array.from(document.getElementsByClassName('row0'))
    let row1El = Array.from(document.getElementsByClassName('row1'))
    let row2El = Array.from(document.getElementsByClassName('row2'))
    let col0El = Array.from(document.getElementsByClassName('col0'))
    let col1El = Array.from(document.getElementsByClassName('col1'))
    let col2El = Array.from(document.getElementsByClassName('col2'))
    let diag0El = Array.from(document.getElementsByClassName('diag0'))
    let diag1El = Array.from(document.getElementsByClassName('diag1'))

    let allArr = [row0El, row1El, row2El, col0El, col1El, col2El, diag0El, diag1El];
    let allVal = [row0X, row1X, row2X, col0X, col1X, col2X, diag0X, diag1X];
    let allOVal = [row0O, row1O, row2O, col0O, col1O, col2O, diag0O, diag1O];

    allOVal.forEach(element => {
        if (element == 0) {
            return
        }
    });

    for (let j = 0; j < allArr.length; j++) {
        const arrElement = allArr[j];


        for (let index = 0; index < arrElement.length; index++) {

            let element = arrElement[index];


            if (allVal[j] == 1) {
                if (!(element.hasChildNodes())) {
                    return element
                }
            }


        }
    }
    for (let j = 0; j < allArr.length; j++) {
        const arrElement = allArr[j];


        for (let index = 0; index < arrElement.length; index++) {

            let element = arrElement[index];


            if (allOVal[j] == 1) {
                if (!(element.hasChildNodes())) {
                    return element
                }
            }


        }
    }
    for (let j = 0; j < allArr.length; j++) {
        const arrElement = allArr[j];


        for (let index = 0; index < arrElement.length; index++) {

            let element = arrElement[index];

            if (allVal[j] == 2) {
                if (!(element.hasChildNodes())) {
                    return element
                }
            }

        }
    }


    if (!(row1El[1].hasChildNodes())) {
        return row1El[1]
    }

    for (let j = 0; j < allArr.length; j++) {
        const arrElement = allArr[j];


        for (let index = 0; index < arrElement.length; index++) {

            let element = arrElement[index];


            if (!(element.hasChildNodes())) {
                return element
            }

        }
    }


}


PvP.onclick = () => {
    mode.style.display = 'none'
    boxes.forEach(element => {
        element.onclick = () => {
            if (!(element.hasChildNodes())) {
                movecount--;
                if (i == 1) {
                    AddO(element)
                    PlayerX.classList.toggle('active')
                    PlayerO.classList.toggle('active')
                } else {
                    AddX(element)
                    PlayerX.classList.toggle('active')
                    PlayerO.classList.toggle('active')
                }
                i = (i + 1) % 2
            }
        }
    });
}
easy.onclick = () => {
    mode.style.display = 'none'
    boxes.forEach(element => {
        element.onclick = () => {
            if (i == 1) {
                if (!(element.hasChildNodes())) {
                    movecount--;
                    AddO(element)
                    PlayerX.classList.toggle('active')
                    PlayerO.classList.toggle('active')
                    i = (i + 1) % 2
                }
                setTimeout(() => {

                    movecount--;
                    AddX(computerMoveEasy())
                    PlayerX.classList.toggle('active')
                    PlayerO.classList.toggle('active')
                    i = (i + 1) % 2
                }, 1000);
            }
        }
    });
}
hard.onclick = () => {
    mode.style.display = 'none'
    boxes.forEach(element => {
        element.onclick = () => {
            if (i == 1) {
                if (!(element.hasChildNodes())) {
                    movecount--;
                    AddO(element)
                    PlayerX.classList.toggle('active')
                    PlayerO.classList.toggle('active')
                    i = (i + 1) % 2
                }
                setTimeout(() => {

                    movecount--;
                    AddX(computerMoveHard())
                    PlayerX.classList.toggle('active')
                    PlayerO.classList.toggle('active')
                    i = (i + 1) % 2
                }, 1000);
            }
        }
    });
}
again.onclick = () => {
    movecount = 9
    PlayerO.classList.add('active')
    PlayerX.classList.remove('active')

    row0O = row1O = row2O = row0X = row1X = row2X = 3
    col0O = col1O = col2O = col0X = col1X = col2X = 3
    diag0O = diag1O = diag0X = diag1X = 3
    result.style.display = 'none'
    again.style.display = 'none'

    i = 1;

    boxes.forEach(element => {
        element.innerHTML = ''
    });

    Owins.innerText = `${Owin_Count}`
    Xwins.innerText = `${Xwin_Count}`

    mode.style.display = 'flex'
}
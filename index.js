let boxes = Array.from(document.getElementsByClassName('aBox'))
let result = document.getElementById('result')
let PlayerX = document.getElementById('playerX')
let PlayerO = document.getElementById('playerO')
let again = document.getElementById('again')
let Owins = document.getElementById('Owins')
let Xwins = document.getElementById('Xwins')
let movecount = 9
PlayerO.classList.add('active')
let i = 1
let Owin_Count = 0
let Xwin_Count = 0




again.onclick = () => {
    movecount = 9
    PlayerO.classList.add('active')
    PlayerX.classList.remove('active')

    row0O = row1O = row2O = row0X = row1X = row2X = 3
    col0O = col1O = col2O = col0X = col1X = col2X = 3
    diag0O = diag1O = diag0X = diag1X = 3
    result.style.display = 'none'
    again.style.display = 'none'

    i = 0;

    boxes.forEach(element => {
        element.innerHTML = ''
    });

    Owins.innerText = `${Owin_Count}`
    Xwins.innerText = `${Xwin_Count}`

}

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


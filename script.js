function makeGrid(cellNumber) {
    const mainGrid = document.querySelector('.mainGrid')
    for (i = 1; i <= cellNumber; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        mainGrid.appendChild(gridRow);
        for (j = 1; j <= cellNumber; j++) {
            const gridCol = document.createElement('div');
            gridCol.classList.add('gridCol');
            gridRow.appendChild(gridCol);

        }
    }
    const gridColumns = document.querySelectorAll('.gridCol');
    for (i = 0; i < gridColumns.length; i++) {
        gridColumns[i].addEventListener('mouseover', changeColumnColor);
    }

}

makeGrid(16);

function changeColumnColor() {
    this.style.backgroundColor = 'black';
}


function selectGridSize() {
    let mainGrid = document.querySelector('.mainGrid');
    while (mainGrid.firstChild) {
        mainGrid.removeChild(mainGrid.firstChild)
    }
    var cellNumber = Number(prompt('Choose grid size up to 100 cells'));
    while (cellNumber < 0 || cellNumber > 100) {
        var cellNumber = Number(prompt('Choose grid size up to 100 cells'));
    }
    return makeGrid(cellNumber); //return cellNumber
}

const selectSizeBtn = document.querySelector('#selectSize');
selectSizeBtn.addEventListener('click', selectGridSize);



// reikia:
// mygtuko paspaudimas turi istrint esama grida ir sukurt nauja
//atsiradus nauja gridui turi but sudeti event listeneriai naujai
// patikrinti vartotojo ivesti kad butu daigiau uz 0 ir maziau uz 100
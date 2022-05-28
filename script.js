function makeGrid() {
    const mainGrid = document.querySelector('.mainGrid')
    for (i = 0; i <= 15; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        mainGrid.appendChild(gridRow);
        for (j = 0; j <= 15; j++) {
            const gridCol = document.createElement('div');
            gridCol.classList.add('gridCol');
            gridRow.appendChild(gridCol);

        }
    }
}



makeGrid();
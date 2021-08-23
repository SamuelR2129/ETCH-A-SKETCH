
//makes the 16x16 square grid
let squareNum = 16;

for (let i = 0; squareNum > i; i++){
    for (let i = 0; squareNum > i; i++){

        const gridBoard = document.querySelector(".grid-board");
        const gridBlock = document.createElement("div");
        gridBlock.classList.add('block');
        gridBlock.textContent = '';
        gridBoard.appendChild(gridBlock);        
    }
}

//named function to create the drawing effect
let hoverSquare = document.querySelector(".grid-board");

let onHoverHandler = (event) => event.target.style.background = "orange";

hoverSquare.addEventListener('mouseover', onHoverHandler, false); 

restart.addEventListener('click', () => {

    //resets the grid to starting colour
    let blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        block.style.background = "white";
    });

    // prompts and returns the size of the grid
    let amountSquares = parseInt(prompt("What size grid?"));

    while (amountSquares <= 0 || amountSquares > 100){
        alert("give me a number between 1 and 100");
    } 

    //sets the new amount of divs to be added
    squareNum = amountSquares;
    
    //deletes the old grid table
    const gridContainer = document.querySelector(".grid-board");

    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);  
    }

    //resizes the  conatiner to fit the divs into a grid by parsing the value to style
    gridContainer.style.gridTemplateColumns = `repeat(${squareNum}, 25px)`;
    gridContainer.style.gridTemplateRows = `repeat(${squareNum}, 25px)`;
    
    //creates the new grid table
    for (let i = 0; squareNum > i; i++){
        for (let i = 0; squareNum > i; i++){
            const gridBoard = document.querySelector(".grid-board");
            const gridBlock = document.createElement("div");           
            gridBlock.classList.add('block');
            gridBlock.textContent = '';
            gridBoard.appendChild(gridBlock);           
        }
    }  
});





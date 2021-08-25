
//makes the 16x16 square grid
let squareNum = 16;

for (let i = 0; (squareNum*squareNum) > i; i++){

    const gridBoard = document.querySelector(".grid-board");
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("block");
    gridBlock.textContent = "";
    gridBoard.appendChild(gridBlock);        
}

//named function to create the drawing effect
let hoverSquare = document.querySelector(".grid-board");

function generateRandomColor(event)
{
    let randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    event.target.style.background = randomColor;
    return randomColor;
    //random color will be freshly served
}

hoverSquare.addEventListener("mouseover", generateRandomColor, false); 

restart.addEventListener("click", () => {

    //resets the grid to starting colour
    let blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        block.style.background = "white";
    });

    // prompts and returns the size of the grid
    squareNum = parseInt(prompt("What size grid?"));

    while (squareNum <= 0 || squareNum > 100){
        alert("give me a number between 1 and 100");
    } 
    
    //deletes the old grid table
    const gridContainer = document.querySelector(".grid-board");

    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);  
    }

    //resizes the  conatiner to fit the divs into a grid by parsing the value to style
    document.documentElement.style.setProperty("--grid-size", squareNum);

    //creates the new grid table
    for (let i = 0; (squareNum*squareNum) > i; i++){
        const gridBoard = document.querySelector(".grid-board");
        const gridBlock = document.createElement("div");           
        gridBlock.classList.add("block");
        gridBlock.textContent = "";
        gridBoard.appendChild(gridBlock);           
    }
});




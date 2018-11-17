
/* Select containerNode within global scope. Apply styling. */
const container = document.getElementById('container');
    container.style.background = "teal";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(16, 1fr)";
    container.style.maxWidth = "960px";
    container.style.margin = "80 auto"; //Margin vertical = 80 px, horizontal = auto;


/* Create a grid items using for loop. ATT : fixed number.. Append to container. Apply styling to grid items */
for (let i = 1 ; i <= 256 ; i++) {
    const box = document.createElement("div");
    box.classList.add("items") // Setting class="items"
    box.innerHTML = i;
    box.style.background = "skyblue";
    box.style.padding = "10px";
    box.style.border = "1px solid black";
    box.style.margin = "0";
    box.style.maxWidth = "50px";
    box.style.textAlign = "center";
    box.style.font = "10px Arial Black"
    container.appendChild(box);  
}

    container.addEventListener('mouseover', (event) => {
        event.target.style.background = "rosybrown";
            // console.log(event.target); // 
        setTimeout(function() { // Delay event action with 500 ms
        event.target.style.background = "skyblue"; // This makes up the CB function for setTimeout.
            // console.log(event.clientX);  Returns x-coordinate
            // console.log(event.clientY);  y-coordinates

          }, 500);
        }, false);


/* At click buton removes container (clears grid) and prompts for a number which is sent to function createNew() */
const button = document.querySelector('button');
        button.addEventListener('click', (e) => { 
            container.remove();
            let numOfItems = parseInt(prompt("enter nr"))
            createNew(numOfItems);
        });

    const aNewContainer = document.createElement("div")
    aNewContainer.style.display = "grid";
    aNewContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
    aNewContainer.style.margin = "80 px auto";
        
    const createNew = (aNum) => {
    // aNewContainer.style.gridTemplateColumns = `repeat(${aNum}, 1fr)`;
    aNewContainer.style.maxWidth = "960 px";
    aNewContainer.style.background = "blue";
    document.body.appendChild(aNewContainer);
    createGridItems(aNum)
}
        
const createGridItems = (aaNum) => {
    for (i = 1; i <= aaNum; i++) {
    const box_two = document.createElement('div');
    box_two.style.background = "green";
    box_two.style.padding = '20 px';
    box_two.innerHTML = i;
    aNewContainer.appendChild(box_two);
}
}
        
        
        
       
    
    





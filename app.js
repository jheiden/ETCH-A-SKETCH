
/* Create container within global scope. Apply styling. */

const container = document.getElementById('container');
    container.style.background = "teal";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(16, 1fr";
    container.style.maxWidth = "960px";
    container.style.margin = "80 auto"; //Margin vertical = 80 px, horizontal = auto;


/* Create a grid items using for loop. ATT : fixed number.. Append to container. Apply styling to grid items */

for (let i = 1 ; i < 257 ; i++) {
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

// const boxes = document.querySelectorAll(".items"); // Selector for grid items.
    // boxes.forEach(box => {  forEach takes a CB function as argument..
        //console.log(box);
    // });

    container.addEventListener('mouseover', (event) => {
        event.target.style.background = "rosybrown";
            // console.log(event.target); // 
        setTimeout(function() { // Delay event action with 500 ms
        event.target.style.background = "skyblue"; // This makes up the CB function for setTimeout.
            // console.log(event.clientX);  Returns x-coordinate
            // console.log(event.clientY);  y-coordinates

          }, 500);
        }, false);


const button = document.querySelector('button');
        button.addEventListener('click', (e) => { 
            container.remove();
            let numOfItems = parseInt(prompt("enter nr"))
            console.log(typeof numOfItems);

        });
        
        
        
        
        
       
    
    





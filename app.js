
const container = document.getElementById('container');
container.style.background = "teal";
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(16, 1fr";
container.style.maxWidth = "768px";
container.style.margin = "80 auto"; //Margin vertical = 80 px, horizontal = auto;


/* Append to container. Apply style to grid items */

for (let i = 1 ; i < 257 ; i++) {
    const box = document.createElement("div");
    box.style.background = "lightblue";
    box.style.padding = "10px";
    box.style.border = "1px solid black";
    box.style.margin = "0";
    box.style.maxWidth = "50px";
    box.style.textAlign = "center";
    box.style.font = "10px Arial Black"
    //box.style.fontFamily = "Arial Black, Gadget, sans-serif";
    box.classList.add("items")
    box.innerHTML = i;
    container.appendChild(box);  
}


const boxes = document.querySelectorAll(".items"); // class of divs = .items
    // boxes.forEach(box => {  forEach takes a CB function as argument..
        //console.log(box);
    // });

    container.addEventListener('mouseover', (event) => {
        event.target.style.background = "rosybrown";

            setTimeout(function() {
            event.target.style.background = "lightblue";
            console.log(event.clientX); // Returns x-coordinate
            console.log(event.clientY); // y-coordinates
          }, 500);
        }, false);

    
    
    





window.onload = function() {
    main();
}

function main() {
    // let button = document.getElementById("changeColor");
    // let Heading1 = document.getElementById("heading1");
    // let color = document.getElementById("color");
    // button.addEventListener("click", function() {
    //     Heading1.style.color = color.value;
    // });

    // let box1 = document.getElementById("box1");
    // let box2 = document.getElementById("box2");
    // let box3 = document.getElementById("box3");
    // let box4 = document.getElementById("box4");
    // let box5 = document.getElementById("box5");
    // let body = document.getElementById("body");



    // box1.addEventListener("mouseenter", function() {
    //     body.style.backgroundColor = "red";
    // });
    // box2.addEventListener("mouseenter", function() {
    //     body.style.backgroundColor = "blue";
    // });
    // box3.addEventListener("mouseenter", function() {
    //     body.style.backgroundColor = "yellow";
    // });
    // box4.addEventListener("mouseenter", function() {
    //     body.style.backgroundColor = "orange";
    // });

    // box5.addEventListener("mouseenter", function() {
    //     body.style.backgroundColor = "pink";
    // });
    // let box1 = document.getElementById("box1");
   

    let body = document.getElementById("body");
    var iDiv = document.createElement('div');
    iDiv.className = 'block';
    document.getElementsByTagName('body')[0].appendChild(iDiv);
    
    // Now create and append to iDiv
    
    for(let i=1;i<=2000;i++){
        var innerDiv = document.createElement('div');
        innerDiv.className = `box`;
        iDiv.appendChild(innerDiv);
    }
    
    let childdivs = document.querySelectorAll('.block div'); // querySelectorAll holo sob class k catch kora
    childdivs.forEach(function(childdiv){
        childdiv.addEventListener("mouseenter", function() {
         childdiv.style.backgroundColor = colorGenertor();
        //   body.style.backgroundColor = childdiv.style.backgroundColor;
        });
    });
 
    
 

   
}

function colorGenertor(){
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
}


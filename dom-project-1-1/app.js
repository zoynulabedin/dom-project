window.onload = function() {
    setInterval(main, 500);
    main();
}


function main() {
    let root = document.getElementById('root');
    let button = document.getElementById('change-color');
    
        root.style.backgroundColor = genraterRgb();
 
}

function genraterRgb(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

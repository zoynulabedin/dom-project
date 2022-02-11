
window.onload = function() {
    main();
}



setInterval(main, 1000);
function main() {

    let root = document.getElementById('root');
   root.style.background = rgbColorGenerator();

  
}
setInterval(count, 1000);



function rgbColorGenerator() {
 let red =  Math.floor(Math.random() * 255);
 let green = Math.floor(Math.random() * 255);
 let blue = Math.floor(Math.random() * 255);

 return rgb = `rgb(${red}, ${green}, ${blue})`;
}


window.onload = function() {
 
    main();
}


function main() {
    let root = document.getElementById('root');
    let button = document.getElementById('change-color');
    let copybtn = document.getElementById('copybtn');
    let output = document.getElementById('output');

    button.addEventListener('click', function() {
        let bgcolor = generateHexColor();
        root.style.backgroundColor = bgcolor;
       output.value = bgcolor;
       copybtn.innerText = "Copy";
    }
    );

    copybtn.addEventListener('click', function() {
        navigator.clipboard.writeText(output.value);
        copybtn.innerText = 'Copied!';
    }
    );
 
}

function generateHexColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

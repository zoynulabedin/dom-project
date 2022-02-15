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
    let colorpicker = document.getElementById('colorpicker');
    return colorpicker.value;
   

}

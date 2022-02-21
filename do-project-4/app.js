window.onload = function() {
 
    main();
}


function main() {
    let root = document.getElementById('root');
    let copybtn = document.getElementById('copybtn');
    let output = document.getElementById('output');
    let refreshwindow = document.getElementById('refresh-window');
    let colorpicker = document.getElementById('colorpicker');
    colorpicker.onchange = function() {
        let color = colorpicker.value;
        root.style.backgroundColor = color;
        output.value = color;
        copybtn.innerText = 'Copy';
    }

    copybtn.addEventListener('click', function() {
        navigator.clipboard.writeText(output.value);
        copybtn.innerText = 'Copied!';
    }
    );
 
    refreshwindow.addEventListener('click', function() {
        location.reload();
    });
}



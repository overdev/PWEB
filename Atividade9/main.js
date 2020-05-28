function maiuscula() {
    var txt = document.getElementById('txt');
    var str = txt.value;
    txt.value = str.toUpperCase();
}

function minuscula() {
    var txt = document.getElementById('txt');
    var str = txt.value;
    txt.value = str.toLowerCase();
}
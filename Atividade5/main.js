
/**
 * Retorna o maior entre três numeros.
 * @param a um numero
 * @param b um numero
 * @param c um numero
 */
function max3(a, b, c) {
    let compA = a > b ? a : b;
    let compB = compA > c ? compA : c;
    return compB;
}

function maiorDeTres() {
    let a = parseInt(prompt("Digite o 1º numero (inteiro):"));
    let b = parseInt(prompt("Digite o 2º numero (inteiro):"));
    let c = parseInt(prompt("Digite o 3º numero (inteiro):"));

    alert("O maior entre " + a + ", " + b + " e " + c +" é: " + max3(a, b, c));
}


maiorDeTres();


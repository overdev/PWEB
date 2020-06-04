function validar() {

    const nome = document.forms[0].elements[0];
    const email = document.forms[0].elements[1];
    const comentario = document.forms[0].elements[2];
    const sim = document.forms[0].elements[3];
    const nao = document.forms[0].elements[4];

    if (nome.value.length < 10) {
        alert("O campo nome deve ter mais de 10 caracteres, tem apenas " + nome.value.length + ".");
    }

    if (!email.value.match(/.+@.+\..+/)) {
        alert("Email inválido: " + email.value);
    }

    if (comentario.value.length < 10) {
        alert("O campo comantário deve ter mais de 20 caracteres");
    }

    if (sim.checked == true) {
        alert("Volte sempre à esta página!");
    } else if (nao.checked == true) {
        alert("Volte sempre à esta página!");
    } else {
        alert("Por favor, responda a pesquisa!");
    }
}
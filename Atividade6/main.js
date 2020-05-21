/**
 * Criação de objetos
 */

 // Por literal
 let pessoa1 = {
    nome: 'João',
    idade: '18',
    altura: 1.83,
    peso: 72.1
 }

 // Por função construtora
 function funcPessoa(nome, idade, altura, peso) {
     this.nome = nome;
     this.idade = idade;
     this.altura = altura;
     this.peso = peso;
 }

 let pessoa2 = new funcPessoa('Leticia', 22, 1.67, 57.8);

 // Por "classe" (provavelmente errado...)
 const protPessoa = function() {
     this.nome = '';
     this.idade = 0;
     this.altura = 0.0;
     this.peso = 0.0;
 }
 protPessoa.prototype.constructor = function(nome, idade, altura, peso) {
     this.nome = nome;
     this.idade = idade;
     this.altura = altura;
     this.peso = peso;
 }

let pessoa3 = new protPessoa('Marta', 42, 1.71, 62.4);

alert("pessoa1 = " + JSON.stringify(pessoa1));
alert("pessoa2 = " + JSON.stringify(pessoa2));
alert("pessoa3 = " + JSON.stringify(pessoa3));

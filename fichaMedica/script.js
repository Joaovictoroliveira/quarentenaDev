let nome = prompt('Digite seu nome completo');
tagh1.innerHTML = "Nome: " + nome;

let dataNascimento = prompt('Digite sua data de nascimento');

let idade = prompt('Digite sua idade');

let temCondicao = confirm('Tem alguma condição médica pré-existente?');

if(temCondicao == true) {
    condicaoMedica = 'Sim';
}else {
    condicaoMedica = 'Não';
}

lista.innerHTML = `<li> Data Nascimento: ${dataNascimento} </li>
                   <li> Idade: ${idade} anos </li>
                   <li> condição pré-existente: ${condicaoMedica} </li> `

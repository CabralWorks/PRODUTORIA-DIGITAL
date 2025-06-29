const { Given, When, Then } = require('@cucumber/cucumber');

Given('que estou na página de cadastro', function () {
  console.log('→ Acessou a página de cadastro');
});

When('eu preencho todos os campos corretamente', function () {
  console.log('→ Preencheu os campos corretamente');
});

Then('vejo a mensagem {string}', function (mensagem) {
  console.log(`→ Mensagem exibida: ${mensagem}`);
});
# language: pt
Funcionalidade: Cadastro de usuário
  Como um visitante do sistema
  Quero preencher o formulário de cadastro
  Para criar uma nova conta

  Cenário: Cadastro com sucesso
    Dado que estou na página de cadastro
    Quando eu preencho todos os campos corretamente
    Então vejo a mensagem "Cadastro realizado com sucesso"
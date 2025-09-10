const { retornarUsuario, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai')

describe('Testar as funções de Gestão de Usuários', function() {
    it('Validar que posso adicionar um novo nome de usuário na lista', function(){
        // 1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario({
            nome:'Maria',
            email:'maria@yahoo.com'
        });

        // 2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuario();

        // 3. Comparar se o novo nome está no fim da lista de usuários
        //expect(listaDeUsuarios.at(-1).nome).to.equal('Maria');
        //expect(listaDeUsuarios.at(-1).email).to.equal('maria@yahoo.com');

        expect(listaDeUsuarios.at(-1)).to.eql({
            nome:'Maria',
            email:'maria@yahoo.com'
        })
    });

    it('Retornar lista de usuarios e mostrar na tela', function() {
         const listaDeUsuarios = retornarUsuario();
        expect(console.log(listaDeUsuarios))
    });
});
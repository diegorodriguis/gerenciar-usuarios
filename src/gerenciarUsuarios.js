const usuarios = ['Diego', 'João', 'Josilene', 'Jackeline']

function retornarUsuario(){
    return usuarios;
}

function adicionarNovoUsuario(nome){
    usuarios.push(nome);
}

module.exports = {
    retornarUsuario,
    adicionarNovoUsuario
}
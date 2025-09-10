const usuarios = [
    {
        nome:'Diego',
        email:'dijojo@yahoo.com'
    },
    {
        nome:'João',
        email:'joaozito@yahoo.com'
    },
    {
        nome:'Josilene',
        email:'jojo@yahoo.com'
    },
    {
        nome:'Jackeline',
        email:'jacke@yahoo.com'
    }
];

function retornarUsuario(){
    return usuarios;
}

function adicionarNovoUsuario(usuario){
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuario,
    adicionarNovoUsuario
}
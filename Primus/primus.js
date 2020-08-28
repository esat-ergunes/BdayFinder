const Primus = require('primus')

let go = (server) => {
    let primus = Primus(server, {});
    primus.on('connection',(spark)=>{
        console.log('Recived spark🚀');
    })
}

module.exports.go = go;
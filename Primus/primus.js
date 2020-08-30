const Primus = require('primus');
const User = require("../models/User");
let go = (server) => {
    let primus = new Primus(server, {});
    primus.on('connection',(spark) => {
        console.log('Recived spark🚀');
        
        spark.on('data',(data)=>{
            console.log(data);
            
            primus.write(data);
        });

        


    });
}

module.exports.go = go;
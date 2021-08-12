//requisitando e instanciando o EventEmitter
const EventEmitter = require('events') 
const fs = require('fs')
const path = require('path')

const emitter = new EventEmitter()

//setando para o emitter escutar o "log" e responder com um console.log
emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {
        if (err) throw err
    })
})

//emitindo o log e passando a mensagem
function log(message){
    emitter.emit('log', message)
}

module.exports = log
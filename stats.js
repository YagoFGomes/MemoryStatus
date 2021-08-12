//importando um modulos
const os = require('os') 
const fs = require('fs')
const log = require('./logger')

setInterval(() => {

    const { freemem, totalmem } = os;

    /*
    que é exatamente a mesma coisa que: 
    const freemem = os.freemem
    const totalmem = os.totalmem
    */
    
    //convertendo de bites para MB
    const mem = parseInt(freemem() / 1024 / 1024) 
    const total = parseInt(totalmem() / 1024 / 1024) //convertendo 
    
    const percents = parseInt((mem / total) * 100) //calculo de porcentagem da memoria total
    
    //objeto contendo todas as informações necessarias já formatadas
    const stats = {
        Free: `${mem}MB`, 
        Total: `${total}MB`, 
        Usage: `${percents}%`
    } 
    console.clear()
    console.log("======= PC STATS ======")
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)
}, 1000)
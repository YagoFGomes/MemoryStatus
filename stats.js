const os = require('os'); //importando um modulo "os" do node.js


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
    
    //objeto contendo todas as informações necessarias já formatada
    const stats = {
        Free: `${mem}MB`, 
        Total: `${total}MB`, 
        Usage: `${percents}%`
    } 
    console.clear()
    console.log("======= PC STATS ======")
    console.table(stats)
}, 1000)
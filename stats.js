//importando um modulos
const os = require('os') 
const fs = require('fs')
const log = require('./logger')

setInterval(() => {

    const { cpus, freemem, totalmem, platform, userInfo } = os;

    /*
    que é exatamente a mesma coisa que: 
    const freemem = os.freemem
    const totalmem = os.totalmem
    */
    
    //convertendo de bites para MB
    const mem = parseInt(freemem() / 1024 / 1024) 
    const total = parseInt(totalmem() / 1024 / 1024) //convertendo 
    
    const percents = parseInt((mem / total) * 100) //calculo de porcentagem da memoria total

    //acessando informações da máquina     
    const userinf = userInfo()
    const userName = userinf.username
    
    const CPUs = cpus();
    const cpu = CPUs[0].model;
    const core = CPUs.length;
   
    //objeto contendo todas as informações necessárias já formatadas
    const stats = {
        User: `${userName}`,
        Plataform: `${platform}`,
        FreeM: `${mem} MB`, 
        TotalM: `${total} MB`, 
        UsageM: `${percents}%`,
        Core: `${core}`,
        CPU: `${cpu}`
    } 
    console.clear()
    console.log("======= PC STATS ======")
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)
}, 1000)
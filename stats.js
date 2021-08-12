const os = require('os'); //importando um modulo "os" do node.js

const { freemem, totalmem } = os;

/*
que é exatamente a mesma coisa que: 
const freemem = os.freemem
const totalmem = os.totalmem
*/

const mem = parseInt(freemem() / 1024 / 1024) //convertendo de bites para MB
const total = parseInt(totalmem() / 1024 / 1024) //convertendo de bites para MB

const percents = parseInt((mem / total) * 100) //calculo de porcentagem da memoria total

//objeto contendo todas as informações necessarias já formatada
const stats = {
    freemem: `${mem}MB`, 
    total: `${total}MB`, 
    usage: `${percents}%`
} 

console.log("======= PC STATS ======")
console.table(stats)
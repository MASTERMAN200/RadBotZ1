let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ PULSA : 083813679823
├ DANA : 085714313795
└────
`.trim(), 'Donasi bg Biar Bot Nya on 24Jam', 'SEWA', '.sewa')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

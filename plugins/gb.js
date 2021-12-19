let moment = require('moment-timezone')
let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
let img = './src/mikey.jpg'
let user = global.db.data.users[m.sender]
conn.send3ButtonImg(m.chat, await (await fetch(image)).buffer(), `Halo kak ${conn.getName(m.sender)}\n╭─❒ SCRIPT\n│◦➛Base : Nurutomo Keknya:V\n│◦➛Recode : *©RadBotZ*\n│\n└──────[ YOUTUBE ]──────❒\n  │◦➛Script Ory : Nurutomo\n  │◦➛https:Xnxx.com\n  │◦➛Script Ori : Minta Ke Owner🗿\n  └──────────────────❒`, watermark, 'Owner', '#owner', 'Donasi', '#donasi', 'Back', '#Menu', { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 2022, thumbnail: fs.readFileSync('./src/WS20211008120810477.webp')
}}})
}
handler.command = /^(sc|script|github)$/i

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang🌞"
    }
    if (time >= 15) {
        res = "Selamat sore🌝"
    }
    if (time >= 18) {
        res = "Selamat malam🌚"
    }
    return res
}

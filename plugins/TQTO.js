let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, command, text }) => {
let img = './src/mike.png'
let user = global.db.data.users[m.sender]
conn.sendButton(m.chat, `Brikut Nama Nama pengembang RadBotZ kak ${conn.getName(m.sender)}\n\nThanks to:\n•Allah swt\n•Nurutomo\n•Ariffb\n•IrwanX\n•Dawnfrosty\n•Beniismael\n•Raditya (owner)\n•Rasel  \n•Nadin\n•Aca Mirabel\n•Penyedia Layanan API\n•Orang-orang yang Berdonasi\n•My ortu`, watermark, 'Owner', '#owner', { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: fs.readFileSync('./src/mikey.jpg')
}}})
}
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari🌖"
    if (time >= 4) {
        res = "Selamat pagi🌝"
    }
    if (time > 10) {
        res = "Selamat siang🌞"
    }
    if (time >= 15) {
        res = "Selamat sore🌕"
    }
    if (time >= 18) {
        res = "Selamat malam🌚"
    }
    return res
}

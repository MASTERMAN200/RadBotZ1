let handler = async (m, { conn, command, args, text, usedPrefix, DevMode }) => {
  let { spawn } = require('child_process')
  let fs = require('fs')
const anu = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6283136505591-1614953337@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync('./src/mikey.jpg')
					},
					"title": "Halo Kak",
					"description": "RadBotZ",
					"currencyCode": "USD",
					"priceAmount1000": "999999999999",
					"retailerId": ">//<",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
		}
}
  conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `*Hai Kak, Silahkan pilih menu dibawah*`,
                        "description": `©RadBotZ`,
                        "footerText": "Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada owner.",
                        "buttonText": `Click Here`,
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            { title: 'ＬｉｓｔＭｅｎｕ',
                                "rows": [
                                    {
                                        "title": `Tentang Bot dan Lainya `, "description":  `melihat informasi tentang bot`,
                                        "rowId": `${usedPrefix}botstat`
                                    }, {
                                       "title": `『⌛』-  ʀᴜɴᴛɪᴍᴇ` , "description": `untuk melihat radbotz telah aktif selama...`,
                                       "rowId": `${usedPrefix}runtime`
                                    }, {
                                       "title": `『👤』- ᴏᴡɴᴇʀ`,
"description": `untuk Melihat kontak Owner RadBotZ`, 
                                       "rowId": `${usedPrefix}owner`
                                    }, {
                                       "title": `『⚙️』- SC `,
"description": `Sc? ad bnyak yg lebih bagus di yt`, 
                                        "rowId": `${usedPrefix}sc`
                                    }, {
                                        "title": `『📄』- ᴀʙᴏᴜᴛ `,
"description": `Info Tentang Owner`, 
                                        "rowId": `${usedPrefix}infowner`                               
                                    }, {
                                        "title": `『🧾』Semua Perintah`,
"description": `Memberikan Semua Fitur Bot`,
                                        "rowId": `.? all`
                                    }, {
                                        "title": `『🕋』Islam`,
"description": `Menu Tentang Islam`,
                                        "rowId": `.? quran`
                                    }, {
                                        "title": `『🏫』Edukasi`,
"description": `Menu Edukasi`,
                                        "rowId": `.? edukasi`
                                    }, {
                                        "title": `『📰』News`,
"description": `Menu Berita`,
                                        "rowId": `.? News`
                                    }, {
                                        "title": `『🎮』Game`,
"description": `Menu Game`,
                                        "rowId": `.? game`
                                    }, {
                                        "title": `『🗺️』Epic Rpg`,
"description": `Menu Game RPG`,
                                        "rowId": `.? rpg`
                                    }, {
                                        "title": `『📈』XP`,
"description": `XP Dan Level`,
                                        "rowId": `.? xp`
                                    }, {
                                        "title": `『🔞』NSFW`,
"description": `Menu Bokep`,
                                        "rowId": `.? nsfw`
                                    }, {
                                        "title": `『🖼️』Random Image`,
"description": `Menu Foto Random`,
                                        "rowId": `.? image`
                                    }, {
                                        "title": `『🎇』Stiker`,
"description": `Menu Buat Stiker`,
                                        "rowId": `.? stiker`
                                    }, {
                                        "title": `『🐚』Kerang Ajaib`,
"description": `Menurut Kerang ajaib....`,
                                        "rowId": `.? kerangajaib`
                                    }, {
                                        "title": `『📑』Quotes`,
"description": `Menu Quotes`,
                                        "rowId": `.? quotes`
                                    }, {
                                        "title": `『🏛️』Admin`,
"description": `Menu Admin Group`,
                                        "rowId": `.? admin`
                                    }, {
                                        "title": `『🏢』Grup`,
"description": `Menu Group`,
                                        "rowId": `.? grup`
                                    }, {
                                        "title": `『🔝』Premium`,
"description": `Menu Untuk Premium`,
                                        "rowId": `.? premium`
                                    }, {
                                        "title": `『🖥️』Internet`,
"description": `Cari Sesuatu Di Bot`,
                                        "rowId": `.? internet`
                                    }, {
                                        "title": `『🥷』Anonymous`,
"description": `Mainkan Anonymous Chat`,
                                        "rowId": `.? anonymous`
                                    }, {
                                        "title": `『✒️』Nulis & Logo`,
"description": `Menu Nulis & Logo`,
                                        "rowId": `.? nulis`
                                    }, {
                                        "title": `『📺』Downloader`,
"description": `Download Sesuatu Di Bot`,
                                        "rowId": `.? downloader`
                                    }, {
                                        "title": `『🔧』Tools`,
"description": `Tools Yang Bisa di Gunakan Di Bot`,
                                        "rowId": `.? tools`
                                    }, {
                                        "title": `『🎇』Fun`,
"description": `Menu Ceria`,
                                        "rowId": `.? fun`
                                    }, {
                                        "title": `『📂』Database`,
"description": `Simpan Sesuatu Di Bot`,
                                        "rowId": `.? database`
                                    }, {
                                        "title": `『📝』Vote & Absen`,
"description": `Menu Vote & Absen`,
                                        "rowId": `.? vote`
                                    }, {
                                        "title": `『🎙️』Pengubah Suara`,
"description": `Ubah Suaramu`,
                                        "rowId": `.? audio`
                                    }, {
                                        "title": `『🤖』Jadi Bot`,
"description": `Jadi Bot`,
                                        "rowId": `.? jadibot`
                                    }, {
                                        "title": `『⛩️』Anime`,
"description": `Cari Anime Di Bot`,
                                        "rowId": `.? anime`
                                    }, {
                                        "title": `『ℹ️』Info`,
"description": `Info Tentang Bot`,
                                        "rowId": `.? info`
                                    }, {
                                        "title": `Tanpa Kategori`,
"description": ``,
                                        "rowId": `.? tanpakategori`
                                    }, {
                                        "title": `『🧑‍💻』Owner`,
"description": `Menu Khusu Owner`,
                                        "rowId": `.? owner`}
                                ]
                            }
                        ]
                    }
                 }, {quoted: anu}),{waitForAck: true}
)
}

handler.help = ['Menu k']
handler.tags = ['main']
handler.command = /^menu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

 
module.exports = handler

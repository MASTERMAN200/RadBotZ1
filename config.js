global.linkGC = [''] // ganti jadi group lu
global.owner = ['6289625556161'] // Put your number here
global.mods = [''] // Want some help?
global.prems = [''] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'Dawnfrostkey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'CacaSepongPilar' // ganti aja
global.author = 'BacotDeck' // ganti aja

// silakan di ganti klo mau
global.wait = '_*tunggu..*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.watermark = '©Games ×͜×' //change the watermark (beberapa harus manual)
global.version = '𝑩𝑶𝑻 @^1.1.4'
global.ttq = `Thanks to:
•Allah swt
•Nurutomo
•Ariffb
•IrwanX
•Dawnfrosty
•Beniismael
•Pilar (recode)
•Rasel  
•Nadin
•Aca Mirabel
•Penyedia Layanan API
•Orang-orang yang Berdonasi
•My ortu

Jika menemukan bug atau request fitur dan join bot harap chat owner dengan cara:
*-report* [pesan].

(Bot join group NOT FREE!)
Price:
10K untuk 1 bulan
Untuk 1 group

Nb:bot ini masih terus dikembangkan.`
global.ppkosong = 'https://telegra.ph/file/22fd84e4a3244e1b17e4e.png'
global.ppgc = 'https://telegra.ph/file/22fd84e4a3244e1b17e4e.png'
global.image = 'https://telegra.ph/file/4f4a5a3cde6a98a96da79.jpg'//change the image
global.thumbfoto = 'https://telegra.ph/file/4f4a5a3cde6a98a96da79.jpg' //thumbnail foto tools
global.yamete = 'https://telegra.ph/file/f7b13f18a1f21e5ca6aed.jpg' //qr
global.thumb = 'https://telegra.ph/file/4f4a5a3cde6a98a96da79.jpg'
global.thumb2 = 'https://telegra.ph/file/4f4a5a3cde6a98a96da79.jpg'
global.thumb3 = 'https://telegra.ph/file/4f4a5a3cde6a98a96da79.jpg'
global.sumberurl = 'https://instagram.com/rasel.ganz'
global.deskripsiurl = 'Saya adalah Bot WhatsApp ×͜×.'

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 106 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

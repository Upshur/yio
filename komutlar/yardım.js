const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Evolve Yardım Menüsü`, client.user.avatarURL())
  .setColor("green")
  .setThumbnail(client.user.avatarURL())
  .setDescription("Evolve Bot iyi kullanımlar")
  .addField(" • Kategoriler:", `> • e+kullanıcı: **Kullanıcı yardım menüsünü gösterir.**\n > • e+moderasyon: **Moderasyon yardım menüsünü gösterir.**\n > • e+kayıtsistemi: ** Kayıt sistemi yardım menüsünü gösterir.**\n > • e+korumasistemi** Koruma sistemi yardım menüsünü gösterir.**\n > • e+logosistemi: ** Logo sistemi yardım menüsünü gösterir.**\n > • e+çekilişsistemi: ** Çekiliş sistemi yardım menüsünü gösterir.**\n > • !özelodasistemi: ** Özel Oda sistemi yardım menüsünü gösterir.** \n > • !profilsiistemi: **Profila sistemi yardım menüsünü gösterir.** \n > • !ekonomisistemi: ** Ekonomi sistemi yardım menüsünü gösterir.**  \n > • !radyo: ** Radyo sistemi yardım menüsünü gösterir.**`)
  .addField("youtube.com/UC11Rld6YNhm7Fbo-gbiup7Q" ,"Evolve")
  .addField(" • Linkler:", "• [Evolve](https://youtube.com/UC11Rld6YNhm7Fbo-gbiup7Q)")
  .setImage("")
.setFooter("Evolve", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "",
    usage: ""
}
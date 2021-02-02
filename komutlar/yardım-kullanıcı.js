const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix
let gif = `GİF`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
 **${prefix}davet** \n-> Botu davet edersiniz.
 **${prefix}shardbilgi** \n-> Botun shard bilgilerini gösterir.
 **${prefix}pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
 **${prefix}randompp** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
 **${prefix}öneri** \n-> Bota öneri belirtirsiniz.
 **${prefix}istatistik** \n-> Botun istatistiğini gösterir.
 **${prefix}sonmesaj** \n-> Yazdığınız son mesajı gösterir.
`)
 .setTimestamp()
 .setImage(gif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
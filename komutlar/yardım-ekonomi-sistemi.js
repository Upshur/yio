const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Ekonomi Sistemi Yardım Menüsü`)
 .setDescription(`
 **${Prefix}bilgiler** \n-> Hesap Bilgisini Gösterir
 **${Prefix}bakiye** \n-> Bakiyeyi Gösterir
 **${Prefix}g* \n-> 
`)
 .setFooter(`Asreaper Bot`)
 .setTimestamp()
 message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'çekilişsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
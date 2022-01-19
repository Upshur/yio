const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

let cinsiyet = args[0]
if (!cinsiyet) return message.channel.send(
      "**Evolve** \n  \n**Lütfen cinsiyetinizi belirtin.** \n **Örnek:** **e+cinsiyet-ayarla** `(Cinsiyet)` \n`**Tüm komutlara erişmek için -> !yardım** \n\n**Asreaper**"
    );

 db.set(`AsreaperCinsiyet_${message.author.id}`, cinsiyet)
  message.channel.send("**Evolve** \n**------------------------------------**  \n **• Cinsiyet başarıyla ayarlandı.** \n **• Belirtilen Cinsiyet ->** `" + 
  cinsiyet +
  "` \n`• e+yardım` **Yazarak tüm komutlara erişebilirsiniz.** \n **------------------------------------**\n**Evolve**"
  );


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};

exports.help = {
  name: "cinsiyet-ayarla",
  description: "cinsiyet-ayarla",
  usage: "cinsiyet-ayarla",
  kategori: "Profil"
};

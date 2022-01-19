const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

let isim = args.slice(0).join(" ");
if (!isim)

return message.channel.send(
 "**Evolve**\n\n ・**Lütfen isim belirtin.** \n **Örnek:** **!isim-ayarla** `(İsim)` \n ・`**Tüm komutlara erişmek için -> !yardım**  \n\n**Evolve**"
    );
db.set(`Asreaperİsim_${message.author.id}`, isim)
return message.channel.send(
    "**Evolve**\n**------------------------------------**\n**• Profil isminiz başarıyla ayarlandı.** \n**• Belirtilen İsim ->** `" +
    isim +
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
  name: "isim-ayarla",
  description: "isim-ayarla",
  usage: "isim-ayarla",
  kategori: "Profil"
};

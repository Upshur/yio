const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

let soyisim = args.slice(0).join(" ");
if (!soyisim)

return message.channel.send(
 "**Evolve**\n\n**Lütfen soy ismini belirtin.** \n・**Örnek:** **e+soyisim-ayarla** `(Soyisim)` \n・`**Tüm komutlara erişmek için -> e+yardım**\n\n**Evolve** "
    );
db.set(`AsreaperSoyisim_${message.author.id}`, soyisim)
return message.channel.send(
    " **Evolve** \n**------------------------------------**\n**• Soy isim başarıyla ayarlandı.** \n**• Belirtilen Soy İsim ->** `" +
    soyisim +
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
  name: "soyisim-ayarla",
  description: "soyisim-ayarla",
  usage: "soyisim-ayarla",
  kategori: "Profil"
};

const Discord = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: "cat",
    catgory: "Fun",
    description: "Lekér egy cuki cicát! :D",
    run: async (bot, message, args) => {
        let üzenetek = [{"date": "xd"}]
        let random_üzenet_szam = Math.floor(Math.random()*üzenetek.length)

        let botname = "Teszt"
            let msg = await message.channel.send("*Macska betöltése...*")

            let {body} = await superagent
            .get(`https://rocket.greencobalt.dev/starship.php?api&section=closures`)

            if(!{body}) return message.channel.send("A file betöltésekor hiba lépett fel!")

            let catEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField("Ugy milyen cuki?", ":3")
            .setDescription(body[0].DATE)
            .setTimestamp(message.createdAt)
            .setFooter(botname)

            message.channel.send(catEmbed)

    }
} 
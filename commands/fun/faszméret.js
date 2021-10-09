const Discord = require("discord.js");
module.exports = {
    name: "méret",
    description: "f@sz méret parancss.",
    run: async (bot, message, args) => {

        let faszméret = Math.floor(Math.random()*29 + 1)
        let First_User = message.mentions.members.first() || message.guild.members.cache.get(args[0])


        message.channel.send(`<@${First_User.id}> fasza ${faszméret}-cm.`)

    }
}
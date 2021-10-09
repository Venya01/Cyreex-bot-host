const Discord = require("discord.js");
module.exports = {
    name: "howgay",
    description: "howgay méret parancss.",
    run: async (bot, message, args) => {

        let gay = Math.floor(Math.random()*99 + 1)
        let First_User = message.mentions.members.first() || message.guild.members.cache.get(args[0])


        message.channel.send(`<@${First_User.id}> ${gay}%-ban meleg`)

    }
}
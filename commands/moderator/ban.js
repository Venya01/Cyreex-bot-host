const Discord = require("discord.js");
module.exports = {
    name: "ban",
    category: "Moderator",
    description: "Ban parancss.",
    run: async (bot, message, args) => {

            let prefix = "!?!"

             {
                let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
                let rawreason = args[2];
                let bantime = args[1];
                let reason = args.slice(2).join(' ')
                if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("BAN_MEMBERS")) return;
                if(!args[0] || !args[1] || !args[2] || isNaN(bantime)) return message.reply("Helyes használat: "+prefix+"ban [user] [idő(nap{max 7})] [indok]");
                if (user.hasPermission("BAN_MEMBERS") || user.hasPermission("ADMINISTRATOR")) return message.reply("Őt nem banolhatod ki!");
                if(user.ban({days: bantime, reason: reason})) {
                    message.reply("Sikeresen kitiltottad a felhasználót! (" + user.user.tag + ")")
                } else {
                    message.reply("Hiba történt, lehet a botnak nincs joga bannolni!");
                }
            }
}
} 
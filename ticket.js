const Discord = require("discord.js");
module.exports = {
    name: "ticket",
    category: "ticket system",
    description: "ticket",
    run: async (bot, message, args) => {
        let prefix = "!?!"
        
        message.guild.channels.create(`ticket-${message.author.username}`, {
            permissionOverwrites: [
                {
                    id: message.author.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                },
                {
                    id: message.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL'],
                },
            ],
            type: 'text',
        }).then(async channel => {
            message.reply(`Sikeresen létrehoztad a Ticketed! Kattints a(z) ${channel}, hogy megtekintsd és megírd a problémád.`);
            channel.send(`Üdvözlünk ${message.author} a Ticketedben! Kérlek légy türelmes, a csapat rövid időn belül válaszol. Ha be szeretnéd zárni a Ticketet akkor reagálj a megfelelő emojival`);
            const logchannel = message.guild.channels.cache.find(channel => channel.name === 'ticket-logok');
            if (logchannel) {
                logchannel.send(`Ticket ${message.author.username} létrehozva. Kattints, hogy megnézd <#${channel.id}>`);
            }
  
            const reactionMessage = await channel.send("Köszönjük hogy felvetted velünk a kapcsolatot!");
  
      try {
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");
      } catch (err) {
        channel.send("Hiba: emojik küldése!");
        throw err;
      }
  
      const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("MANAGE_MESSAGES"),
        { dispose: true }
      );
  
      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔒":
            channel.send("A csatornát lezártad már csak az adminok tudnak írni")
            channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
            break;
          case "⛔":
            channel.send("A csatorna tölődni fog 5 másodperc múlva");
            setTimeout(() => channel.delete(), 5000);
            break;
        }
      });
  
      
        
            
  
        });  

    }
}
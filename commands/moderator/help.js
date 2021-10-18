const { MessageEmbed } = require('discord.js');
const os = require('os');

module.exports = {
    name: 'help',
    category: 'bot',
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot statisztikái')
            .setColor('#000000')
            .addFields(
                {
                    name: '🌐 Moderator',
                    value: `ban, kick, warn, help, gstart, clear, say, embedsay, createrole, szavazás`,
                    inline: true,
                },
                {
                    name: 'Fun',
                    value: `meme, cat, dog, jail, ship, méret, howgay, FI, hug, kill, hack, nitro, hello`,
                    inline: true,
                },
                {
                    name: 'Info',
                    value: `userinfo, botinfo, weather, ping, ticket, calc`,
                    inline: true,
                },
                {
                    name: 'Music',
                    value: `play, queue, loop, stop, skip`,
                    inline: true,
                },
                {
                    name: 'music effektek',
                    value: '3d, bassboost, echo, karaoke, nightcore, vaporwave',
                    inline: true,
                },
                {
                    name: 'Discord games',
                    value: `poker, fishing, betrayal, ytt`,
                    inline: true,
                },
            )
            .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());

        return message.channel.send(embed);
    },
};
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "gstart",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: ":givewa:giveaway",
  run: async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`Valamit nem adtál meg!Helyes használat:!?!gstart <idő> <csatorna> <nyeremény>`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `Nem jól adtad meg az időt`
      );
    if (isNaN(args[0][0])) return message.channel.send(`Nem adtál meg időt`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Nem találom ezt a csatornát`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Nincs megadott nyeremény!`);
    message.channel.send(`*nyereményjáték létre hozva itt: ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`Új nyereményjáték !`)
      .setDescription(
        `${message.author} csinált egy nyereményjátékot ahol a(z) nyeremény:**${prize}** `
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react(":tada:");
    setTimeout(() => {
      if (m.reactions.cache.get(":tada:").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Nem reagált elég ember a sorsoláshoz`
        );
      }

      let winner = m.reactions.cache
        .get(":tada:")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `A nyertes **${winner}**`
      );
    }, ms(args[0]));
  },
};

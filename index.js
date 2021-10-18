const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
var weather = require('weather-js');
const superagent = require('superagent');
const randomPuppy = require('random-puppy');
const talkedRecently = new Set();

const fs = require("fs");
const money = require("./money.json");
const { NOTIMP } = require("dns");

const fetch = require("node-fetch")

DisTube = require('distube'),
    client = new Discord.Client(),
    config = {
        prefix: "!?!",
        token: process.env.TOKEN || "a tokenünk"
    };
    
    

///////////////////////////////////////////////////////////////////////////////

    

/////////////////////////////////////////////////////////////////////
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot)
});

bot.on("message", async message => {
    let prefix = botconfig.prefix;

    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.member) message.member = await message.guild.fetchMember(message)

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = bot.commands.get(cmd);
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));

    if(command)
    command.run(bot, message, args);
});

/////////////////////////////////////////////////////////////////////////


let botname = "Cyreex bot"

bot.on("ready", async() => {
    console.log(`${bot.user.username} elindult!`)

    let státuszok = [
        "Prefix: !?!",
        "Készítő: Venya",
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type: "WATCHING"})
    }, 3000)
})



bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;



    if(cmd === `${prefix}hello`){
        message.channel.send("Szia");
    }

    if(cmd === `${prefix}nitro`){
        message.channel.send(new Discord.MessageEmbed().setTitle("Itt válthatod be a free nitrót").setColor("RANDOM").setDescription("[katt](https://bit.ly/3AwnCCq)" ))
    }

    if(cmd == `${prefix}ping`) {
        message.channel.send(`Cyreex BOT bot pingje a következő : **${bot.ws.ping}ms**`)
    }

    
    
    if(cmd === `${prefix}help`){
        let HelpEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .setTitle("Help Embed!")
        .addField("Írd be hogy miben kérsz segítséget\n \n!?!help-administrator\n \n!?!help-fun\n \n!?!help-music", "***")
        .setDescription(`\`${prefix}\``)
        .setFooter(`${botname} | ${message.createdAt}`)

        message.channel.send(HelpEmbed)
    }

    if(cmd === `${prefix}help-administrator`){
        let AdministratorHelpEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .setTitle("Help Embed!")
        .addField("ban,kick,mute,clear,szavás\ncreaterolesay,warn,embedsay", "***")
        .setThumbnail(message.author.displayAvatarURL())
        .setImage(message.guild.iconURL())
        .setDescription(`\`${prefix}\``)
        .setFooter(`${botname} | ${message.createdAt}`)

        message.channel.send(AdministratorHelpEmbed)
    }

    if(cmd === `${prefix}help-fun`){
        let FunHelpEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .setTitle("Help Embed!")
        .addField("meme,weather,hack,méret,howgay,kutya,cat\nFI,botinfo,ping,ship,nitro,calc,hug,kill,jail", "***")
        .setThumbnail(message.author.displayAvatarURL())
        .setImage(message.guild.iconURL())
        .setDescription(`\`${prefix}\``)
        .setFooter(`${botname} | ${message.createdAt}`)

        message.channel.send(FunHelpEmbed)
    }

    if(cmd === `${prefix}help-music`){
        let MusicHelpEmbed = new Discord.MessageEmbed()
        .setColor("#98AA12")
        .setAuthor(message.author.username)
        .setTitle("Help Embed!")
        .addField("play,loop,skip,stop,queue\n \n3d,bassboost,echo,karaoke,nightcore,vaporwave", "***")
        .setThumbnail(message.author.displayAvatarURL())
        .setImage(message.guild.iconURL())
        .setDescription(`\`${prefix}\``)
        .setFooter(`${botname} | ${message.createdAt}`)

        message.channel.send(MusicHelpEmbed)
    }

    if(cmd === `${prefix}hack`){
        //felhasználó lékérése
        const hack_usr = message.mentions.users.first();
        //ha nincs felhasználó
      if(!hack_usr){
        return message.reply('adj meg egy felhasználót, akit meg tudok hackelni!')
      }
      //felhasználó
      let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
      
      //embedek
      
       const embed_kezdes = new Discord.MessageEmbed().setDescription('A hack előkészül!');
       consthacked = new Discord.MessageEmbed().setDescription('HACKED.')
       consthacked2 = new Discord.MessageEmbed().setDescription('HACKED..')
       consthacked3 = new Discord.MessageEmbed().setDescription('HACKED...')
        const10 = new Discord.MessageEmbed().setDescription('HACKED.\n\nA hack állapota: 10%');
       const20 = new Discord.MessageEmbed().setDescription('HACKED..\n\nA hack állapota: 20%');
      const30 = new Discord.MessageEmbed().setDescription('HACKED...\n\nA hack állapota: 30%');
      constserver = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 46%`\n\nA hack állapota: 34%');
      constserver2 = new Discord.MessageEmbed().setDescription('HACKED..\n`Sever connections: 95%`\n\nA hack állapota: 39%');
      constserver3 = new Discord.MessageEmbed().setDescription('HACKED...\n`Server connections: 100%`')
      const40 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n\nA hack állapota: 40%');
      const50 = new Discord.MessageEmbed().setDescription('HACKED..\n`Server connections: 100%`\n\nA hack állapota: 50%');
      constfeldolgozas = new Discord.MessageEmbed() .setTitle("HACKED...\n`Server connections: 100%`\n**FELDOLGOZÁS:**") .setDescription('`Feldolgozás állapota: 37%`');
      constfeldolgozas2 = new Discord.MessageEmbed() .setTitle("HACKED.\n`Server connections: 100%`\n**FELDOLGOZÁS:**") .setDescription('`Feldolgozás állapota: 74%`');
      constfeldolgozas3 = new Discord.MessageEmbed() .setTitle("HACKED..\n`Server connections: 100%`\n**FELDOLGOZÁS:**") .setDescription('`Feldolgozás állapota: 100%, kész!`');
      constfeldolgozas4 = new Discord.MessageEmbed() .setTitle(`HACKED...\nServer connections: 100%\n**Member username: ${hack_usr}**`);
      const60 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n\nA hack állapota: 60%');
      const70 = new Discord.MessageEmbed().setDescription('HACKED..\n`Server connections: 100%`\n\nA hack állapota: 70%');
      constconnections = new Discord.MessageEmbed().setDescription("HACKED...\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 12%`\n\nA hack állapota: 72°%");
      constconnections2 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 39%`\n\nA hack állapota: 75%');
      constconnections3 = new Discord.MessageEmbed().setDescription('HACKED..\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 51°%`\n\nA hack állapota: 78°%');
      constconnections4 = new Discord.MessageEmbed().setDescription('HACKED...\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 86%`\n\nA hack állapota: 79%');
      constconnections5 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 100%`')
      const80 = new Discord.MessageEmbed().setDescription('HACKED..\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 100%`\n\nA hack állapota: 80%');
      const90 = new Discord.MessageEmbed().setDescription('HACKED...\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 100%`\n\nA hack állapota: 90%');
      const100 = new Discord.MessageEmbed().setDescription('HACKED.\n`Server connections: 100%`\n`Feldolgozás állapota: 100%, kész!`\n`Check connections: 100%`\n\nA hack állapota: 100%!');
      constkesz = new Discord.MessageEmbed().setDescription('HACKED:**\nA hackelés befejeződött! Az eredmény:**\n\n\n\nA hack állapota: 100%!');
      consteredmeny = new Discord.MessageEmbed().setDescription(`HACKED:**\nA hackelés befejeződött! Az eredmény:**\n **USERNAME:** ${hack_usr}\n **TAG:** ${hack_usr.tag}\n **EMAIL-CÍM:** ${hack_usr}@gmail.com\n\n\n\nA hack állapota: 100%!`);
      //üzenet küldése
      message.channel.send({ embed: embed_kezdes }).then((msg) => {
          setTimeout(function () {
              msg.edit(consthacked);
              msg.edit(consthacked2);
              msg.edit(consthacked3);
              msg.edit(const10);
              msg.edit(const20);
              msg.edit(const30);
              msg.edit(constserver);
              msg.edit(constserver2);
              msg.edit(constserver3);
              msg.edit(const40);
              msg.edit(const50);
              msg.edit(constfeldolgozas);
              msg.edit(constfeldolgozas2);
              msg.edit(constfeldolgozas3);
              msg.edit(constfeldolgozas4);
              msg.edit(const60);
              msg.edit(const70);
              msg.edit(constconnections);
              msg.edit(constconnections2);
              msg.edit(constconnections3);
              msg.edit(constconnections4);
              msg.edit(constconnections5)
              msg.edit(const80);
              msg.edit(const90);
              msg.edit(const100);
              msg.edit(constkesz)
              msg.edit(consteredmeny);
          }, 5000)
      })
      }


    /////////////////////////////////
    //// LOGIKAI OPERÁTOROK TIPP ////
    //////////////////////////////////////////////////////////
    //                                                      //
    //   || vagy , PL: if(X=1 || X=3)                       //
    //                                                      //
    //   && és , PL: if(X=5 && Y=3)                         //
    //                                                      //
    //   = sima egyenlő jel , PL: if(5=5)                   //
    //   ==  egyenlő jel , PL: if(X==5)                     //
    //   >= nagyobb vagy egyenő , PL: if(X >= 3)            //
    //   <= kisebb vagy egyenlő , PL: if(X <= 3)            //
    //   ! tagadás , PL if(X != 2)                          //
    //                                                      //
    //////////////////////////////////////////////////////////
  
    

    if(cmd === `${prefix}calc`){

        var plus = Math.floor(Number(args[0]) + Number(args[2]));
        if (isNaN(plus)) return message.channel.send("``Hiba: Kérlek adj meg számokat!``");
    
        var minus = Math.floor(args[0]) - (args[2]);
        if (isNaN(minus)) return message.channel.send("``Hiba: Kérlek adj meg számokat!``");
    
        var multiply = Math.floor(args[0]) * (args[2]);
        if (isNaN(multiply)) message.channel.send("``Hiba: Kérlek adj meg számokat!``");
    
        var divide = Math.floor(args[0]) / (args[2]);
        if (isNaN(divide)) return message.channel.send("``Hiba: Kérlek adj meg számokat!``");
    
        if (args[1] ==  "+") return message.channel.send(args[0] + " + " + args[2] + " = **" + plus + "**");
        if (args[1] ==  "-") return message.channel.send(args[0] + " - " + args[2] + " = **" + minus + "**");
        if (args[1] ==  "*") return message.channel.send(args[0] + " * " + args[2] + " = **" + multiply + "**");
        if (args[1] ==  "x") return message.channel.send(args[0] + " x " + args[2] + " = **" + multiply + "**");
        if (args[1] ==  "/") return message.channel.send(args[0] + " / " + args[2] + " = **" + divide + "**");
    
        else {
            message.channel.send("``valami hiba van!``");
        } 
    }
  
    if(cmd === `${prefix}kill`){
 
        let killed_user = message.mentions.members.first();
      
        if(!killed_user){
        return message.reply("Említsd meg azt az embert akit meg szeretnél ölni!")
        }
        
    
        let kill_gif = [
    
          // Ide berakhatsz olyan linket amilyen gifet szeretnél hogy mutasson
    
          'https://giphy.com/gifs/ZEE5-kill-knife-killing-Z9zv16k5g2BbwDRkfE',
          'https://giphy.com/gifs/southparkgifs-3o6Zt7xWCLZD8f5ZsY',
          'https://giphy.com/gifs/guys-jedi-michonne-4SNQVF2WYOGe4',
          'https://giphy.com/gifs/wolfentertainment-fbi-fbimostwanted-most-wanted-hV6rn0naXBLsaFDCQk',
        ]
        let random_kill_gif = Math.floor(Math.random()*kill_gif.length)
      
        
        message.channel.send(`${message.author} megölelte őt: ${killed_user}`)
        message.channel.send(kill_gif[random_kill_gif])
    
      }

    if(cmd === `${prefix}hug`){
 
        let hugged_user = message.mentions.members.first();
      
        if(!hugged_user){
        return message.reply("Említsd meg azt az embert akit meg szeretnél ölelni!")
        }
        
    
        let hug_gif = [
    
          // Ide berakhatsz olyan linket amilyen gifet szeretnél hogy mutasson
    
          'https://tenor.com/view/gato-cat-dog-love-gif-9061092',
          'https://giphy.com/gifs/lisa-vertudaches-cute-hug-empathy-3oEdv4hwWTzBhWvaU0',
          'https://giphy.com/gifs/love-hug-monkey-42YlR8u9gV5Cw',
          'https://giphy.com/gifs/hug-minions-love-QbkL9WuorOlgI',
          'https://giphy.com/gifs/love-disney-girl-EvYHHSntaIl5m',
          'https://giphy.com/gifs/namslam-hug-seal-xT0xemCvkpWyJlOG2Y',
          'https://giphy.com/gifs/hug-cat-love-NhjPhBQIIxdxm',
          'https://giphy.com/gifs/scoob-scooby-doo-hanna-barbera-JUZ8v4zWXX9bEZgBq8'
        ]
        let random_hug_gif = Math.floor(Math.random()*hug_gif.length)
      
        
        message.channel.send(`${message.author} megölelte őt: ${hugged_user} :hugging:`)
        message.channel.send(hug_gif[random_hug_gif])
    
      }

    if(cmd === `${prefix}kutya`) {
        let msg = await message.channel.send('Generálás... ')
 
   var dog;
 
   dog = await superagent
       .get("https://random.dog/woof.json");
 
   while (dog.body.url.endsWith(".webm") || dog.body.url.endsWith(".mp4")) {
       dog = await superagent
           .get("https://random.dog/woof.json");
       console.log(dog.body)
   }
   msg.delete()
   var embed = new Discord.MessageEmbed()
       .setColor("#ff0000")
       .setTitle("Unrealy | Kutya")
       .setImage(dog.body.url)
       .setFooter(`Forrás: Athox`)
   message.channel.send(embed);
 }
 if(cmd === `${prefix}Kutya`) {
     let msg = await message.channel.send('Generálás... ')
 
 var dog;
 
 dog = await superagent
    .get("https://random.dog/woof.json");
 
 while (dog.body.url.endsWith(".webm") || dog.body.url.endsWith(".mp4")) {
    dog = await superagent
        .get("https://random.dog/woof.json");
    console.log(dog.body)
 }
 msg.delete()
 var embed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("Unrealy | Kutya")
    .setImage(dog.body.url)
    .setFooter(`Forrás: Athox`)
 message.channel.send(embed);
 }

 if(cmd === `${prefix}cat`) {
    let msg = await message.channel.send("Generálás...") 
  
  let {body} = await superagent
  .get(`http://aws.random.cat/meow`)
  //console.log(body.file) 
  if(!{body}) return message.channel.send("Nem sikerült a kép legenerálása!")
  
  let cEmbed = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setAuthor('Unrealy | Cica', message.guild.iconURL())
  .setImage(body.file)
  .setTimestamp()
  .setFooter('Forrás: Cyreex BOT')
  
  message.channel.send(cEmbed)
  
  msg.delete();
  }
      
    if(cmd === `${prefix}FI`) {
        let válaszArray = ["fej","fej", "írás","fej","írás","írás",];
        let válaszNum = Math.floor(Math.random() * válaszArray.length) + 1;
        if(MessageArray[1] === `fej` || MessageArray[1] === `írás` || MessageArray[1] === `írás`|| MessageArray[1] === `fej`) {
    
        message.reply(`Te: ${MessageArray[1]} Cyreex BOT: ${válaszArray[válaszNum]}`);
        } else message.reply("Kérlek adj meg egy tárgyat! pl fej, írás")
    }

    if(cmd === `${prefix}embedsay`){
        if(message.member.hasPermission("KICK_MEMBERS")){
            if(args[0]){
                let say_embed = new Discord.MessageEmbed()
                .setDescription(args.join(" "))
                .setColor("RANDOM")
    
                message.channel.send(say_embed);
            } else {
                message.reply(`Használat: ${prefix}embedsay <üzenet>`)
            }
        } else message.reply("Ehhez nincs jogod! (KICK_MEMBERS jogot igényel!)")
    }
    
    if(cmd === `${prefix}report`){
        if(args[0] && message.mentions.members.first() && args[1]){
    
            message.channel.send("A reportodat sikeresen elküldtük!")
    
            let report_channel = "887361238257008651";
    
            let report_embed = new Discord.MessageEmbed()
                .setAuthor(message.mentions.members.first().user.tag + `| REPORTED`)
                .setDescription("Report indoka:" + args.join(" ").slice(args[0].length))
                .addField("Reportolta:", message.author.tag)
                .setColor("RANDOM")
                .setTimestamp(message.createdAt)
                .setFooter(bot.user.username)
    
                bot.channels.cache.get(report_channel).send(report_embed);
    
        } else {
            let he_embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag + `| Használat`)
                .setDescription(`${prefix}report @<név> <indok>`)
                .setColor("RANDOM")
                .setTimestamp(message.createdAt)
                .setFooter(bot.user.username)
    
                message.channel.send(he_embed);
        }
    }
    
    
    if(cmd === `${prefix}szavazas`){
        if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR"))
        if(args[0]){
            let he_embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag + `| Szavazást indított!`)
                .setDescription(args.join(" "))
                .setColor("RANDOM")
                .setTimestamp(message.createdAt)
                .setFooter(bot.user.username)
    
                message.channel.send(he_embed).then(async msg => {
                    await msg.react("✅")
                    await msg.react("❌")
                })
        } else {
            message.reply("Kérlek add meg a szavazást!")
        }
    }
    
    if(cmd === `${prefix}createrole`){
        if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")){
            if(message.member.hasPermission("MANAGE_ROLES")){
                if(args[0]){
                    message.guild.roles.create({
                        data: {
                            "name": args[0],
                        }
                    }).then(message.reply(`${message.author.tag} létrehozta: ${args[0]} nevű rangot!`))
    
                } else message.reply(`Használat: ${prefix}createrole <rang neve>`)
    
            } else message.reply("Ehhez a parancshoz nincs jogod! A következő jog kell hozzá: manage_roles")
        } else message.reply("A botnak nincsen administrator joga! Kérlek adj neki egy admint :D")
    }
    
    if(cmd === `${prefix}clear`){
        if(message.member.hasPermission("KICK_MEMBERS")){
            if(message.guild.member(bot.user).hasPermission("ADMINISTRATOR")){
    
                if(args[0] && isNaN(args[0]) && args[0] <= 100 || 0 < args[0] && args[0] < 101){
    
                    message.channel.send(`Törölve lett: ${Math.round(args[0])} üzenet!`)
                    message.channel.bulkDelete(Math.round(args[0]))
    
                } else {
                    message.reply(`Használat: ${prefix}clear <1-100>`)
                }
    
            } else message.reply("A botnak adminnak kell lennie a szerveren, hogy működjön ez a parancs!")
    
        } else message.reply("Ehhez a parancshoz nincs jogod!")
    }

    if(cmd === `${prefix}say`) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Nincs jogod ehhez a parancshoz!`);
        let bMessage = args.join(" ");
        message.delete().catch();
        message.channel.send(bMessage);
    }

    if(cmd === `${prefix}mute`){
        message.delete()
        if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']))
        message.channel.send("Nincs jogod használni ezt a parancsot!");
      else {
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
      
        if(member) {
            if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR'))
                message.channel.send("Nem tudod lenémítani az illetőt!");
            else {
                let mutedRole = message.guild.roles.cache.get(`760166323648200735`);
                if(mutedRole) {
                    member.roles.add(mutedRole);
                    message.channel.send("A felhasználót lenémítottuk!");
                }
                else
                    message.channel.send("A mute rang nem található.");
            }
        }
        else
            message.channel.send("Az illető nem található!");
        }
      }
 
      if (cmd === `${prefix}ticket`)
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
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
          break;
        case "⛔":
          channel.send("A csatorna tölődni fog 5 másodperc múlva");
          setTimeout(() => channel.delete(), 5000);
          break;
      }
    });

    
      
          

      });




})


bot.on("message", async (message) => {
    if(!message.guild || message.author.bot || !message.content.trim().startsWith(botconfig.prefix)) return;
    var args = message.content.slice(botconfig.prefix.length).trim().split(" ")
    var cmd = args.shift().toLowerCase()

    const { channel } = message.member.voice;

    if(cmd == "ytt" || cmd == "youtubetogether" || cmd == "youtubeegyütt"){
        if(!channel) return message.reply("Be kell lépj egy hangcsatornába!")
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${tokenfile.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(invite =>{
            if(!invite.code) return message.reply(":x: A játék nem tudott elindulni.")
            message.channel.send(`Kattints a alinkre, hogy elindítsd a játékot:\n> https://discord.com/invite/${invite.code}`)
        })
    }else if(cmd == "betrayal" || cmd == "betrayal.io"){
        if(!channel) return message.reply("Be kell lépj egy hangcsatornába!")
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "773336526917861400",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${tokenfile.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(invite =>{
            if(!invite.code) return message.reply(":x: A játék nem tudott elindulni.")
            message.channel.send(`Kattints a alinkre, hogy elindítsd a játékot:\n> https://discord.com/invite/${invite.code}`)
        })
    }else if(cmd == "poker" || cmd == "poker-night" || cmd == "póker"){
        if(!channel) return message.reply("Be kell lépj egy hangcsatornába!")
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755827207812677713",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${tokenfile.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(invite =>{
            if(!invite.code) return message.reply(":x: A játék nem tudott elindulni.")
            message.channel.send(`Kattints a alinkre, hogy elindítsd a játékot:\n> https://discord.com/invite/${invite.code}`)
        })
    }else if(cmd == "fishing" || cmd == "fishington.io"  || cmd == "horgászat"){
        if(!channel) return message.reply("Be kell lépj egy hangcsatornába!")
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "814288819477020702",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${tokenfile.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(invite =>{
            if(!invite.code) return message.reply(":x: A játék nem tudott elindulni.")
            message.channel.send(`Kattints a alinkre, hogy elindítsd a játékot:\n> https://discord.com/invite/${invite.code}`)
        })
    }else {
        return
    }
})



bot.login(tokenfile.token);

// Create a new DisTube
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift();

    if (command == "play")
        distube.play(message, args.join(" "));

    if (["repeat", "loop"].includes(command)){
        distube.setRepeatMode(message, parseInt(args[0]));
        message.channel.send("Meg többszörözte a zene lejátzását!");

    }

    if (command == "stop") {
        distube.stop(message);
        message.channel.send("Megállította a zenét!");
    }

    if (command == "skip")
        distube.skip(message);

    if (command == "queue") {
        let queue = distube.getQueue(message);
        message.channel.send('Mostani queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }

    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        let filter = distube.setFilter(message, command);
        message.channel.send("Mostani queue filter: " + (filter || "Off"));
    }
});

// Queue status template
const status = (queue) => `Hangerő: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

// DisTube event listeners, more in the documentation page
distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Lejtszás \`${song.name}\` - \`${song.formattedDuration}\`\nKérte: ${song.user}\n${status(queue)}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `${song.name} - \`${song.formattedDuration}\` hozzá lett adva a queue hez  ${song.user} által`
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Megy \`${playlist.name}\` lejátszási lista (${playlist.songs.length} dalok).\nKérte: ${song.user}\nMost megy \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `hozzáadta a  \`${playlist.name}\` lejátszási listához tartozó(${playlist.songs.length} dalokat a queuehez\n${status(queue)}`
    ))
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`**Válassz ki egy lehetőséget**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Írj be valamit vagy várj 1 percet a lemondáshoz*`);
    })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", (message) => message.channel.send(`A keresés megszakítva`))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("Hiba történt: " + e);
    });

client.login(config.token);

bot.on("message", async (message) => {
    if(!message.guild || message.author.bot || !message.content.trim().startsWith(botconfig.prefix)) return;
    var args = message.content.slice(botconfig.prefix.length).trim().split(" ")
    var cmd = args.shift().toLowerCase()

    const { channel } = message.member.voice;

    if(cmd == "ytt" || cmd == "youtubetogether" || cmd == "youtubeegyütt"){
        if(!channel) return message.reply("Be kell lépj egy hangcsatornába!")
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${tokenfile.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(invite =>{
            if(!invite.code) return message.reply(":x: A játék nem tudott elindulni.")
            message.channel.send(`Kattints a alinkre, hogy elindítsd a játékot:\n> https://discord.com/invite/${invite.code}`)
        })
    }else if(cmd == "betrayal" || cmd == "betrayal.io"){
        if(!channel) return message.reply("Be kell lépj egy hangcsatornába!")
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "773336526917861400",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${tokenfile.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(invite =>{
            if(!invite.code) return message.reply(":x: A játék nem tudott elindulni.")
            message.channel.send(`Kattints a alinkre, hogy elindítsd a játékot:\n> https://discord.com/invite/${invite.code}`)
        })
    }else if(cmd == "poker" || cmd == "poker-night" || cmd == "póker"){
        if(!channel) return message.reply("Be kell lépj egy hangcsatornába!")
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755827207812677713",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${tokenfile.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(invite =>{
            if(!invite.code) return message.reply(":x: A játék nem tudott elindulni.")
            message.channel.send(`Kattints a alinkre, hogy elindítsd a játékot:\n> https://discord.com/invite/${invite.code}`)
        })
    }else if(cmd == "fishing" || cmd == "fishington.io"  || cmd == "horgászat"){
        if(!channel) return message.reply("Be kell lépj egy hangcsatornába!")
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "814288819477020702",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${tokenfile.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(invite =>{
            if(!invite.code) return message.reply(":x: A játék nem tudott elindulni.")
            message.channel.send(`Kattints a alinkre, hogy elindítsd a játékot:\n> https://discord.com/invite/${invite.code}`)
        })
    }else {
        return
    }
})


bot.login(tokenfile.token);

bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

if(cmd === `${prefix}game`){

    let GameEmbed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Üdvözöllek kalandor!")
    .addField("Úgylátom elfogadtad Dr. Smith Williams kutató úr megbízását.", "-")

    let GameStory1Embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Küldetés")
    .addField("Ha nem mondta volna a feladatod megszerezni a Cyreex sziget közepén található kék cyreex követ és haza jutni.", "-")


    message.channel.send(GameEmbed);
    message.channel.send(GameStory1Embed);



    
}})

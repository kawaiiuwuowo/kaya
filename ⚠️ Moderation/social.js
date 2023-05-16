const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
module.exports = {
  name: "social",
  category: "🔧 Moderation",
   aliases: ["button"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------

    const embed = new Discord.MessageEmbed()
    .setImage('https://cdn.emoji.gg/emojis/5695_staffbot.png')
    .setDescription(`Hey ${message.author}, I am ${client.user} and i would appreciate if you would follow <@632953533905502258> on social media `);

    const embed1 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setImage(``)
    .setTitle("GITHUB")
    .setDescription("https://github.com/kawaiiuwuowo");

    const embed2 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setImage(``)
    .setTitle("TWITCH")
    .setDescription("https://twitch.tv/cuddlyplayz");

    const embed3 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setImage("")
    .setTitle("TWITTER")
    .setDescription("https://twitter.com/CuddlyTeach");

    const embed4 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("DISCORD SERVER")
    .setImage(``)
.setDescription("https://discord.gg/qnwmDrvvFE");
    

    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

    let button1 = new MessageButton()
    .setLabel(`GITHUB`)
    .setID(`help1`)
    .setStyle("blurple");

    let button2 = new MessageButton()
    .setLabel(`TWTICH`)
    .setID(`help2`)
    .setStyle("blurple");

    let button3 = new MessageButton()
    .setLabel(`TWITTER`)
    .setID(`help3`)
    .setStyle("blurple");



    let button4 = new MessageButton()
    .setLabel(`DISCORD SERVER`)
    .setID(`help4`)
    .setStyle("blurple");

   

    
    let row1 = new MessageActionRow()
    .addComponents(button1, button2, button3, button4)
    let row2 = new MessageActionRow()
    .addComponents()
    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row1, row2);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row1);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row1);
            await b.reply.defer()

        }

        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row1);
            await b.reply.defer()

        }

        if(b.id == "help4") {
            
            MESSAGE.edit(embed4, row1);
            await b.reply.defer()

        }

        if(b.id == "help5") {
            
            MESSAGE.edit(embed5, row1);
            await b.reply.defer()

        }

        if(b.id == "help6") {
            
            MESSAGE.edit(embed6, row1);
            await b.reply.defer()

        }



    })

    collector.on('end', (b) => {
        MESSAGE.edit(`Oh Timeout! please retype the command`)
    })
    }
  };

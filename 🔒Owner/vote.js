const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
 name: "vote",
 aliases: ["info"],
 description: "Shows all commands of the bot",

 run: async (client, message, args) => {
 
 if(message.author.id !== "OWNERID") return message.channel.send("This command is only for bot owners.");

let helpEmbed = new MessageEmbed()
 
.setTitle('**Vote**')  .setDescription(`vote for me on top.gg ❤️`)
 .setThumbnail(client.user.displayAvatarURL())
 .setImage("")
 .setFooter("Click on these buttons to invite me!")
 .setColor("#FFFFF0")


 let button1 = new disbut.MessageButton()
 .setStyle('url')
 .setLabel('Invite Me') 
 .setURL("https://discord.com/oauth2/authorize?client_id=870261816503201822&permissions=8&scope=bot")
.setEmoji("❤️");
let button2 = new
disbut.MessageButton()
.setStyle('url')
.setLabel('vote')
  .setEmoji("❤️")
   .setURL('https://top.gg/servers/1003023220724744332')
return message.channel.send(helpEmbed,{
 button: [button1,button2],
 });

 },
};

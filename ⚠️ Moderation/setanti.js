const {Prefix, Color, BotName} = require("../../config.js");

module.exports = {
  name: "setanti",
  aliases: ["set"],
  category: "moderation",
  description: "",
  run: async (client, message, args) => {
const db = require('quick.db');
const DC = require('discord.js')
const e = new DC.MessageEmbed()
e.addField("Command Usage:" , `${Prefix}set <antilink/antiswear> <enable/disable>`)
e.setColor("RED")
//e.setTimestamp();
const [type, onoroff] = args;
if (!message.member.hasPermission("ADMINISTRATOR")) {

const er = new DC.MessageEmbed();
er.setDescription("You are not allowed to use this command.")
er.setColor("RED")
//er.setTimestamp();
return message.channel.send(err)
}
if (!['antilink', 'antiswear'].includes(type)) {
return message.channel.send(e);
} 
if (!['enable','disable'].includes(onoroff)) 
{
  const err = new DC.MessageEmbed();
  err.addField("Invalid Toogle:", "Please use '__enable__' to Enable Antilink/Antiswear and '__disable__' to Disable the Antilink/Antiswear.")
  err.setColor("RED")
  err.setTimestamp();
return message.channel.send(err)
}
db.set(`automod.${message.guild.id}.${type}`, (onoroff == "enable") ? 'yes' : 'no');
const success = new DC.MessageEmbed();
//success.addField(":white_check_mark: Success :white_check_mark:" , "Successfuly "+onoroff+" "+type+"")
success.setAuthor(`${BotName}`, client.user.displayAvatarURL({ dynamic : true }))
success.addField("Type:", `\`${type}\``)
success.addField("Toggle:", `${onoroff}`)
success.setFooter("Auto Moderation [V1.2]")
success.setColor(Color)
message.channel.send(success);
  }
}

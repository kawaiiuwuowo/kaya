const Discord = module.require("discord.js");
const {Color, ServerName} = require("../../config.js");

module.exports = {
  name: "members",
  category: "utility",
  aliases: ["memberscount", "membercount"],
  run: async (client, message, args) => {

  //message.delete();
  message.react("✅");
  
  const embed = new Discord.MessageEmbed()
    .setTitle(`${ServerName} - Members Counter:`)
    .setColor("GREEN")
    .addField("Overall Members:", message.guild.memberCount || message.guild.members.size)
    .setFooter(message.member.displayName, message.author.displayAvatarURL(), true)
    .setThumbnail(client.user.displayAvatarURL())
  
  message.channel.send(embed);
}
}

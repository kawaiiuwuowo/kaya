const Discord = module.require("discord.js");

module.exports = {
  name: "members",
  category: "🔧 Moderation",
  aliases: ["memberscount", "membercount"],
  run: async (client, message, args) => {

 
  
  const embed = new Discord.MessageEmbed()
    .setAuthor("Members", message.guild.iconURL)
    .setColor(colors.uptime)
    .addField("Overall Members:", message.guild.memberCount || message.guild.members.size)
  
  message.channel.send(embed);
}
}

const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "rate",
  category: "🤣 Fun",
  aliases: [],
  description: "Bot Rate Your Given Thing!",
  usage: "Rate <Text>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`Please Give Me Something To Rate!`);

    let embed = new Discord.MessageEmbed()
     
      .setTitle(`I Rate`)
      .setDescription(`${Math.floor(Math.random() * 11)}/10 To ${Content}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};

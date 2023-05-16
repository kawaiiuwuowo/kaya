const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "setavatar",
  description: "Change the bot avatar",
  usage: "setavatar <link>",
  category: "owner",
  ownerOnly: true,
  run: async (client, message, args) => {
    const oldn = client.user.username
    const nolink = new MessageEmbed()
      .setColor("#fc0330")
      .addField(`**__No link Was Provided__**`, "Please Give A link");

    if (!args.length) return message.reply({ embeds: [nolink] });
    const newav = args.join(" ");


    if (newav) {
      client.user.setAvatar(`${newav}`);
      const newnn = new MessageEmbed()
        .setColor("#00FF00")
        .addField(
          "**__Avatar Changed__**",
          `**__New avatar:__** ${newav}`
        );
      return message.channel.send({ embeds: [newnn] });
    }
  },
};

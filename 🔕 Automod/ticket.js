const { MessageFlags, MessageManager } = require("discord.js");
const emoji = require('../../emoji.json');
const config = require('../../config.json');

module.exports = {
  name: 'ticket',
  aliases: ["tiket"],
  category: "Moderation",
  description: "Open a ticket!",
  example: "s.ticket",

  run: async (client, message, args) => {
    const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
    channel.setParent(`your ticket system's category ID`);

    channel.updateOverwrite(message.author, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true
    });

    const reactionMessage = await channel.send('Thank you for contacting support!')

    try {

      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send(`${emoji.Error} Error sending emojis!`);
      throw err;
    }

    const collector = reactionMessage.createReactionCollector((reaction, user) =>
      message.guild.members.cache.find((member) => member.id === user.id).hasPermission('ADMINISTRATOR'),
      { dispose: true }
    );

    collector.on('collect', (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          channel.updateOverwrite(message.author.id, { SEND_MESSAGES: false });
          break;
        case "⛔":
          channel.send(`${emoji.Loading} Deleting this channel in **5** seconds.`);
          setTimeout(() => channel.delete(), 5000);
          break;

      }
    });

    message.channel.send(`${emoji.Approved} We will be right with you! ${channel}`).then((msg) => {
      setTimeout(() => msg.delete(), 300000000);
      setTimeout(() => message.delete(), 300000000);
    }).catch((err) => {
      throw err;
    })
  },
};

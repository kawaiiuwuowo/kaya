const Discord = require("discord.js");

module.exports = {
  name: "hack",
  description: "Hacking some members..uwu",
  usage: "(prefix)hack <@user>",
  aliases: ["hck"],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    let user = message.mentions.users.first();
    if (!user) {
      return message.channel.send("Please mention a user to hack!");
    }

    let text = [
      `Getting ${user} **Mobile phone number**..`,
      `Getting ${user} **Gmails**..`,
      `Sending **VIRUS** into ${user}`,
      `Stealing ${user} **Game acc**..`,
      `**Getting all about ${user} information**`
    ];

    let current = 0;
    let count = text.length;
    let editTime = 3000;

    message.channel.send(`Checking ${user} acc`).then ((msg) => {

      let interval = setInterval(() => {

        if (current === count) {
          msg.edit(`**Successfull hacked ${user} acc !!**`);
          clearInterval(interval);
          return;
        }

        let hackMsg = text[current];
        msg.edit(hackMsg);
        current++

      }, editTime);
    })
  }
}

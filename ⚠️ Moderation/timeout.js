const {MessageEmbed} = require("discord.js");
const {ServerName, BotName} = require("../../config.js");

module.exports = {
	name: 'timeout',
	aliases: ['tempmute'],
  description: 'timeout a user',
    usage: "timeout <Mention Member <time>",
	run: async (client, message, args) => {
		const fetch = require('node-fetch');
		const ms = require('ms');
		const time = args.slice(1).join(' ');

    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send({embed: 
            {color: "RED",
            description: "You are not allowed to use this command."
            }})
            .then(msg => {
              msg.delete({ timeout: 4000 });
                  });
    

		if(!time) return message.channel.send({embed: 
            {color: "RED",
            description: "Please provide the user and the time!"
            }})
            .then(msg => {
              msg.delete({ timeout: 4000 });
                  });

		const user = message.mentions.users.first();
		const milliseconds = ms(time);

		if(!user) return message.channel.send({embed: 
            {color: "RED",
            description: "No User Specified."
            }})
            .then(msg => {
              msg.delete({ timeout: 4000 });
                  });

    if (message.mentions.users.first().bot) {
      return message.channel.send({embed: 
            {color: "RED",
            description: "Bot(s) cannot have a timeout."
            }})
            .then(msg => {
              msg.delete({ timeout: 4000 });
                  });
    }

		if(!milliseconds || milliseconds < 10000 || milliseconds > 2419200000) {
			return message.channel.send({embed: 
            {color: "RED",
            description: "Please select a time between `10s` and `28d`!\n\nUse: `s -> Seconds` / `m -> Minutes` / `h -> Hours` / `d -> Days`."
            }})
            .then(msg => {
              msg.delete({ timeout: 6000 });
                  });
		}

		const iosTime = new Date(Date.now() + milliseconds).toISOString();

		await fetch(`https://discord.com/api/guilds/${message.guild.id}/members/${user.id}`, {
			method: 'PATCH',
			body: JSON.stringify({ communication_disabled_until: iosTime }),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bot ${client.token}`,
			},
		});

		//message.channel.send(`${user.username} has been timed out for \`${time}\`!`);
    
    let DMEmbed = new MessageEmbed()
      .setColor("YELLOW")
      .setAuthor(`${BotName}`, client.user.displayAvatarURL({ dynamic : true }))
      .setTitle(`You've been temporary muted in ${ServerName}`)
      .addField("Moderator:", `(Hidden)`)
      .addField("Duration:", `\`${time}\``)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(`Your account ID: ${user.id}`)
      .setTimestamp();
    
    user.send(DMEmbed)
      

    message.channel.send({embed: 
            {color: "#fcad03",
            description: `<@${user.id}> has been **timeout.** | \`${user.id}\``
            }});
	},
};

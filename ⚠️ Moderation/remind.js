const Discord = require('discord.js');
const ms = require('ms')

module.exports = {
  name: 'remind',
  category: '🔧 Moderation',
  permissions: "SEND_MESSAGES",
  description: 'reminds you about what will you do!',
  usage: '<time> <reminder>',

  run: async (client, message, args) => {
    let reminder = args.slice(1).join(' ');
    let time = args[0];

    if(!time) return message.channel.send('Please set a time to reminder!', message.channel);

    if(!reminder) return message.channel.send('Please state a reminder!', message.channel);

    if(reminder.length > 200) return message.channel.send('Max Reminder Length Is 500 Characters', message.channel)

    const setreminderembed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('Reminder Set !', message.author.displayAvatarURL())
    .setDescription(`Successfully set <@${message.author.id}> a reminder !`)
    .addField('⌛ Reminded In ⌛', `\`${time}\``)
    .addField('👥 Reminder 👥', `${reminder}`)
    .setTimestamp();

    message.channel.send(setreminderembed);

    setTimeout(async function () {
      message.channel.send(`<@${message.author.id}> Reminder Timeout!`);

      const alertembed = new Discord.MessageEmbed()
      .setColor('RED')
    .setTitle('Reminder Alert !', message.author.displayAvatarURL())
    .setDescription(`Successfully set <@${message.author.id}> a reminder !`)
    .addField('⌛ Reminder ⌛', `\`${reminder}\``)
    .setTimestamp();

    message.channel.send(alertembed)
    }, ms (time));
  },
};

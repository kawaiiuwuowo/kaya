const { MessageEmbed } = require('discord.js');

// Set up the moderator application command
module.exports = {
  name: 'applymod',
  description: 'Apply to become a moderator.',
  run: async (client, message, args, Discord) => {
    // Send a DM to the user who used the command
   // message.author.send('Thank you for your interest in becoming a moderator. Please answer the following questions:');
     try {
      const dmChannel = await message.author.createDM();
      dmChannel.send('Thank you for your interest in becoming a moderator. Please answer the following questions:');
    } catch (err) {
      console.error(err);
      return message.channel.send('Sorry, I was unable to send you a DM. Please make sure your DMs are enabled and try again.');
    }
    // Set up a message collector to receive responses from the user
    const filter = (m) => m.author.id === message.author.id;
    const collector = message.author.dmChannel.createMessageCollector(filter, { max: 3 });

    // Store the responses in an array
    const responses = [];

    // Ask the user for their name
    message.author.send('What is your name?');

    // Collect the user's name
    collector.on('collect', (m) => {
      responses.push(m.content);

      // Ask the user for their age
      if (responses.length === 1) {
        message.author.send('How old are you?');
      }

      // Ask the user why they want to be a moderator
      if (responses.length === 2) {
        message.author.send('Why do you want to become a moderator?');
      }

      // If all questions have been answered, send a message to the server owner
      if (responses.length === 3) {
        const application = new MessageEmbed()
          .setColor('#0099ff')
          .setTitle(`Moderator Application - ${message.author.tag}`)
          .addField('Name', responses[0], true)
          .addField('Age', responses[1], true)
          .addField('Why do you want to become a moderator?', responses[2]);

        // Replace the server owner ID with your own server's owner ID
        const owner = client.users.cache.get('567386567300087821');

        owner.send({embeds: [application]});
        message.author.send('Thank you for your application. We will review it and get back to you soon.');

        // Stop the collector
        collector.stop();
      }
    });
  },
};

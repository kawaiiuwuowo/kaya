const superagent = require('superagent');
const Discord = require('discord.js');

module.exports = {
  name: "joke",
  category: "🤣 Fun",
  aliases: [],
  run: async(client, message, args) => {

        await superagent
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json')
		   .end((err, response) => {
        let jEmbed = new Discord.MessageEmbed()
        .setTitle("Joke")
        .setDescription(response.body.joke)
        
        message.channel.send(jEmbed);
		})
    }
}

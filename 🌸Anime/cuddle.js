const axios = require('axios');
const { MessageEmbed } = require('discord.js')
const superagent = require("superagent");
const client = require('nekos.life');
var Discord = require('discord.js')
const neko = new client();

module.exports = {
  
        name: "cuddle",
        category: "fun",
        noalias: [''],
          category: "❤️ Anime",
        description: "cuddles a person",
        usage: "<mention>",
        accesableby: "everyone",
    run: async (client, message, args) => {
        const url = 'https://waifu.pics/api/sfw/cuddle';

        const member = message.mentions.members.first()

        const sender = message.author
        
        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error has occured, try again!`)
        }
       
        if (!args[0]) return message.channel.send({
                       embed: {
                    description: ":cinfo: please mention a member!",
                    color: "738add",
                    },
            });

        const embed = new MessageEmbed()
            .setDescription(`${member}, got cuddle by ${sender}`)
            .setColor('#2f3136')
            .setImage(data.url)

        await message.channel.send(embed)
    }
}

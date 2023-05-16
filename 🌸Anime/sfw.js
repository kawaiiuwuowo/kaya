const axios = require('axios');
const { MessageEmbed } = require('discord.js')
const color = "#ffb6c1"


module.exports = {
   
        name: "sfw",
        category: "fun",
        noalias: [''],
        category: "Anime",
        description: "shows nsfw",
    run: async (client, message, args) => {
           const url = ('https://api.waifu.pics/sfw/waifu')


        
        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error has occured, try again!`)
        }
       

              
        const embed = new MessageEmbed()
            
            .setImage(data.url)
            .setColor("#ffb6c1")
        await message.channel.send(embed)
    }
}

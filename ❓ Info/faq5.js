const { MessageEmbed } = require('discord.js')

module.exports = {
        name: "faq5",
        description: "Showing information about FAQ number 5",
        usage: ".faq5",
        aliases: [],
        category: "🧷 Faq",
        run: async (bot, message, args) => {
        //message.delete();
        let warnPermErr = new MessageEmbed()
        .setColor("RED")
        .setDescription("You are not allowed to use this command.")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);

            let faqEmbed = new MessageEmbed()
            .setTitle("FAQ 5: How I can be a server moderator?")
            .setDescription(`\nTo be a Moderator, Go apply in <#918611804383498345> or Win one of the Moderator role giveaway by the Owner!`)
            .setColor("YELLOW")

            message.channel.send(faqEmbed)


    }
}

const { MessageEmbed } = require('discord.js')

module.exports = {
        name: "faq3",
        description: "Showing information about FAQ number 3",
        usage: ".faq3",
        aliases: [],
        category: "🧷 Faq",
        run: async (bot, message, args) => {
        //message.delete();
        let warnPermErr = new MessageEmbed()
        .setColor("RED")
        .setDescription("You are not allowed to use this command.")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);

            let faqEmbed = new MessageEmbed()
            .setTitle("FAQ 3: How I can check my warnings?")
            .setDescription(`\nYou don't remember how many warnings you got? Go to <#918611799253876767> and type the following command: \`.warnings <@user>\``)
            .setColor("YELLOW")

            message.channel.send(faqEmbed)


    }
}

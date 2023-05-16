const { MessageEmbed } = require('discord.js')

module.exports = {
        name: "faq1",
        description: "Showing information about FAQ number 1",
        usage: ".faq1",
        aliases: [],
        category: "🧷 Faq",
        run: async (bot, message, args) => {
          if(message.author.id !== "632953533905502258") return
        //message.delete();
        let warnPermErr = new MessageEmbed()
        .setColor("RED")
        .setDescription("You are not allowed to use this command.")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);

            let faqEmbed = new MessageEmbed()
            .setTitle("FAQ 1: How do i get help?")
            .setDescription(`\n Simply go to <#1101901750996308029>, type .ticket and a staff member will be with you shortly.`)
            .setColor("YELLOW")

            message.channel.send(faqEmbed)


    }
}

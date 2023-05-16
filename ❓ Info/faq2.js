const { MessageEmbed } = require('discord.js')

module.exports = {
        name: "faq2",
        description: "Showing information about FAQ number 2",
        usage: ".faq2",
        aliases: [],
        category: "🧷 Faq",
        run: async (bot, message, args) => {
        //message.delete();
        let warnPermErr = new MessageEmbed()
        .setColor("RED")
        .setDescription("You are not allowed to use this command.")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);

            let faqEmbed = new MessageEmbed()
            .setTitle("FAQ 2: How I can get Notifications? [Giveaways, Announcements...]")
            .setDescription(`\nIf you want to get notified by Giveaways, News/Announcements, Updates or others, go to <#918611797832007745> and react to get <@&918611797450313765>!`)
            .setColor("YELLOW")

            message.channel.send(faqEmbed)


    }
}

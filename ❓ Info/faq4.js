const { MessageEmbed } = require('discord.js')

module.exports = {
        name: "faq4",
        description: "Showing information about FAQ number 4",
        usage: ".faq4",
        aliases: [],
        category: "🧷 Faq",
        run: async (bot, message, args) => {
        //message.delete();
        let warnPermErr = new MessageEmbed()
        .setColor("RED")
        .setDescription("You are not allowed to use this command.")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);

            let faqEmbed = new MessageEmbed()
            .setTitle("FAQ 4: How I can share my suggestion/ideas?")
            .setDescription(`\nDo you have an idea? Go to <#918611799253876767> and type: \`.suggest <message>\`. It will be posted it in <#918778832020987915>!`)
            .setColor("YELLOW")

            message.channel.send(faqEmbed)


    }
}

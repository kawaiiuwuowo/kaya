const { MessageEmbed } = require('discord.js')
const {ServerName, Color} = require("../../config.js");

module.exports = {
        name: "faqs",
        description: "idk",
        usage: ".faqs",
        category: "🧷 Faq",
        aliases: [],
        run: async (bot, message, args) => {
        message.delete();
        let warnPermErr = new MessageEmbed()
        .setColor("RED")
        .setDescription("You are not allowed to use this command.")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);

            let faqEmbed = new MessageEmbed()
            .setTitle(`${ServerName} - FAQs:`)
            .setDescription(`Here are all the list of FAQs Commands:\n`)
            .addField(`How I can get Replit Codes?`, "Use: `.faq1`")
            .addField(`How I can get Notifications? [Giveaways, Announcements...]`, "Use: `.faq2`")
            .addField(`How I can check my warnings?`, "Use: `.faq3`")
            .addField(`How I can share my suggestion?`, "Use: `.faq4`")
            .addField(`How I can be a Server Moderator?`, "Use: `.faq5`")
            .setColor("YELLOW")
            

            message.channel.send(faqEmbed)


    }
}

const Discord = require("discord.js")
const { Permissions } = require("discord.js")

module.exports = {
  name: "appeal",
  description: "ban a user what else by dms lol",

  async run (client, message, args) {
    if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return console.log("imagine trying to ban someone when u dont have ben permission lmfao")

    let reason = args.slice(1).join(" ")

    const usertodm = (args[0])
    console.log(usertodm)
    const mentionedMember = message.mentions.users.first() || message.guild.members.fetch()
 https://discord.js.org/#/docs/main/stable/class/GuildMemberManager?scrollTo=fetch
    if(!args[0]) return message.channel.send("Please mention a user for me to send the appeal to!")
    
  mentionedMember.send("<a:bell:895143627947376690> You were banned in **miyachu**, to appeal, join the appeal server `;`  https://discord.gg/8jvp93xD7W")
    message.delete()
    message.channel.send("Appeal message sent!")

    if(!reason) reason = "No reason given by the person who banned you"
    if(!args[0]) message.channel.send(`<@${message.author.id}> please mention a user for me to ban via mention or ID`);
    if(!mentionedMember) message.channel.send("The user is not in the server or its invalid");
    if(!mentionedMember.bannable) message.channel.send("Are you trying to ban a staff member? Cause I can\'t ban this member!")

    await mentionedMember.send("<a:bell:895143627947376690> You were banned in miyachu, to appeal, join the appeal server;  https://discord.gg/8jvp93xD7W").catch(err => console.log(err));

    await mentionedMember.ban({
      reason: reason
    }).catch(err => console.log(err)).then(() => message.channel.send(`${mentionedMember.user.tag} has been banned from the server for ${reason}`))
 }
}

const discord = require("discord.js")

module.exports = {
    name: "unbanall",
    category: "🔧 Moderation",
    run : async (client,message,args)=> {

message.guild.fetchBans().then(bans =>{
if(bans.size === 0){
    message.channel.send("your server has 0 ban members")

}else {
bans.forEach(ban =>{
message.guild.members.unban(ban.user.id)
message.channel.send("unbanned all users")
})


}



})


  }
    }

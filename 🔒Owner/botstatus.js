const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "owner",
  run: async (client, message, args) => {
    
    //OWNER ONLY COMMAND
    if(!message.author.id === "") {
      return message.channel.send("type in a status please")
    }
    //ARGUMENT
    if(!args.length) {
      return message.channel.send("cant do that")
    }
    
 db.set(`status`, args.join(" "))
   await message.channel.send("success new status added")
    process.exit(1);
    
  }
}

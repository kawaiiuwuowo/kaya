module.exports = {
  name: "bug",
category: "🔧 Moderation",
run : async(client, message, args) => { 
// again make this fit your command handler style 😀
  if (!args[0]) return message.reply("Please specify the bug. Example:\n`/punch isn't working. It isn't mentioning the user I'm trying to punch`");   
  if (args[0] === "bug") return message.reply("Please specify the bug. Example:\n`/punch isn't working. It isn't mentioning the user I'm trying to punch`");   
  args = args.join(" ");   
  message.reply("Thanks for submitting a bug!");  
  const content = `\`\`\`**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**\`\`\``;   
  client.channels.cache.get('976932014643089421').send(content)
}
}

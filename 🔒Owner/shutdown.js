module.exports = {
    name: "shutdown",
    aliases: ["turnoff"],
    description: "Shuts down the bot !!",
    category: "🔒 Owner",
    example: `a!shutdown`,

    run: async(client, message, args) => {
        
        if (message.author.id !== "OWNERID") {
            return;
        }
        
        await message.channel.send(`✅ Thank You For Letting Me Rest!`)
        process.exit()
    }
}

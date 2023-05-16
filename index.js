const https = require('https');
const express = require("express")
const app = express()


app.get("/", (req, res) => {
  res.send("IM FREE!")
})



app.listen(3000, () => {
  console.log("hewoo")
})

const discord = require("discord.js")
const { Intents, Client, Collection } = require("discord.js");
config = require("./config.json"),
fs = require('fs'),
superagent = require('superagent'),
os = require('os');
const db = require("quick.db")
let dev = ["632953533905502258"];

const client = new Client({
  disableEveryone: true,
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    
  ],
});



const colors = require("colors")



client.on('ready', () => { 
  client.user.setActivity(".help | sub to me on twitch", {type: "STREAMING", url: "https://twitch.tv/cuddlyplayz"})
   console.log(`Successfully enabled Streaming Mode.`)
})





client.on('guildMemberAdd', member => {
  if (!member.guild) return;
  let guild = member.guild
  let channel = guild.channels.cache.find(c => c.name === "꒷꒦welcome🎀⸝⸝⨯⁺");

  let membercount = guild.members
  if (!channel) return;

  let embed = new discord.MessageEmbed() 
    .setColor("#FFB6C1") 
    .setTitle("New cutie has entered!")
    .setDescription(`🍰︰Welcy, ${member} to **miyachu** enjoy your stay`)
    .setThumbnail(member.user.displayAvatarURL())
  

  channel.send(embed);
});


client.on('guildMemberRemove', member => {
  if (!member.guild) return;
  let guild = member.guild
  let channel = guild.channels.cache.find(c => c.name === "˚₊໒🥛꒱goodbye₊˚");

  let membercount = guild.members
  if (!channel) return;

  let embed = new discord.MessageEmbed() 
    .setColor("#FFB6C1") 
    .setTitle("looks like a cutie has left!")
    .setDescription(`🍰︰Bye, ${member} hope to see you soon in **miyachu** again ❤️`)
    .setThumbnail(member.user.displayAvatarURL())

  channel.send(embed);
});



client.on("message", (message) => {
if (message.content !== `${config.command}`) return;
  const embed = new discord.MessageEmbed()
  .setTitle("Verify")
  .setDescription("To verify in this server, please verify by clicking the button below.")
  .setColor('#2f3136')
  .setFooter('Verification System')
  
  let verify = new MessageButton()
   .setLabel("Verify")
   .setStyle("blurple")
   .setEmoji("✅")
   .setID("Verify")


  message.channel.send({
    button: verify,
    embed: embed 
  });
})



client.on('clickButton', async (button) => {
    if (button.id !== "Verify") return;
    button.reply.send('You are now sucessfully verified.', true)
    const role = button.guild.roles.cache.get(`${config.roleID}`)
    const member = button.clicker.member
    await member.roles.add(role)
})





const prefix = "."





client.on('message', async (message) => {
  if (message.content === 'welcy') {
    await message.react('🧡');
  }
});




client.on('guildMemberUpdate', async (oldMember, newMember) => {
  const oldBoostStatus = oldMember.premiumSince;
  const newBoostStatus = newMember.premiumSince;

  if (!oldBoostStatus && newBoostStatus) {
    await newMember.guild.systemChannel.send(`${newMember} just boosted the server! Thank you!`);
  }
});






counts = 0;
client.on('message', async message => {
  if(message.channel.id === "1105382009641111633") {
  if (message.author.bot) return;
  if (!Number(parseInt(message.content)))return;
  if (Number(parseInt(message.content)) === counts + 1){
     await message.react('✅')
counts++
  } else {
message.channel.send(`${message.member} messed up at ${counts}, I'm gonna reset the count to 0`).catch(console.error)
    counts = 0;
  }
  }
});











































client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = ".";

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  // If a command is finally found, run the command
  if (command) command.run(client, message, args);
});

//tag
client.on("message", async message => {
  //let prefix = config.prefix;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = ".";
  
  if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
    return message.channel.send(`Bot Prefix : \`${prefix}\``);
  }
});


client.commands = new discord.Collection();
client.queue = new Map();
client.config = config;




client.commands = new discord.Collection();
     
 const commandFolders = fs.readdirSync('./cmd');
     
for (const folder of commandFolders) {
         const commandFiles = fs.readdirSync(`./cmd/${folder}`).filter(file => file.endsWith('.js'));
     for (const file of commandFiles) {
        const command = require(`./cmd/${folder}/${file}`);
         client.commands.set(command.name, command);
     }
}




client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send("Thanks for inviting me")
    })






















































































const { MessageButton, MessageMenuOption, } = require('discord-buttons'); 
require('discord-buttons')(client);







client.login("super secret token")

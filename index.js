// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

require('dotenv').config();


client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});


client.on('messageCreate', async (message) => {
    if (message.content === '叮噹狸') {
        const replay = await message.reply('你的叮噹狸已上線!')
        replay.react('✅')
    }
})

client.on('messageReactionAdd', (reaction) => {
    console.log(reaction)
})

client.login(process.env.TOKEN)
const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '早安1') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1023555311459651654/1103179139122466826/Snipaste_2023-05-03_12-39-48.png')
      replay.react('✅')
  };
}
}

const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '嘿') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1103483163323408434/3e5d1ac7-9a6a-465c-bf2b-c2829871c1c3.gif')
      replay.react('✅')
  };
}
}

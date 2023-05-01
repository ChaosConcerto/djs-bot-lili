const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === 'ruru') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1102229398385606748/sticker.png')
      replay.react('✅')
  };
}
}

const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '151') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1126797338967560212/image.png')
      replay.react('✅')
  };
}
}

const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '噁') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1110182183139807342/E59981.png')
      replay.react('✅')
  };
}
}

const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '晚安') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1111661007480311930/2Q.png')
      replay.react('✅')
  };
}
}

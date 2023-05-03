const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '晚安') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1103000971740708864/2Q.png')
      replay.react('✅')
  };
}
}

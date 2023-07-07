const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '!小白') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1119857820922298389/qZqVpp6dkaGeqqQ.png')
      replay.react('✅')
  };
}
}

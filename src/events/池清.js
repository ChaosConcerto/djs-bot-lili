const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '池清') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1102230955835523174/Z.png')
      replay.react('✅')
  };
}
}

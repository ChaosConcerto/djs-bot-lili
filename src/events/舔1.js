const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '舔1') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1103445638185754744/58b92759bb5dc7139c7722f107a9ede3.gif')
      replay.react('✅')
  };
}
}

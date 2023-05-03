const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '舔') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1103450567973556224/aq9d1-q4zem.gif')
      replay.react('✅')
  };
}
}

const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '歐') {
    const replay = await message.reply('https://media.discordapp.net/attachments/721327813298356304/1034788320741441586/71BF2559-F0D2-4CDE-ADBC-3813BB4A6114.gif')
      replay.react('✅')
  };
}
}

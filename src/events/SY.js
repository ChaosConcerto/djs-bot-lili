const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === 'SY') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1102213718802190336/v2-53461ae9bddedec2d46ce7a4d030b457_b.png')
      replay.react('✅')
  };
}
}

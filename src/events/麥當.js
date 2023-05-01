const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '鳥') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1102228793780879401/-2.gif')
      replay.react('✅')
  }
  else if (message.content === '麥當') {
    const reply = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1102231248694427698/9k.png');
      reply.react('✅');
  };
}
}

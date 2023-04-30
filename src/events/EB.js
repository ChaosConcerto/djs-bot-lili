const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === 'EB') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1023555311459651654/1102183675321384980/IMG_1245.webp')
      replay.react('✅')
  }
  else if (message.content === '臭狗') {
    const reply = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1102159653317652550/IMG_1940.png');
    reply.react('✅');
  };
}
}

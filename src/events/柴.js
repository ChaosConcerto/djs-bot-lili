const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '色狗1') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1023555311459651654/1101811316408205332/1649955937701.gif')
      replay.react('✅')
  }
  else if (message.content === '哭泣') {
    const reply = await message.reply('https://media.discordapp.net/attachments/1023555311459651654/1101815869635559435/6053718bc173ahsr.gif');
    reply.react('✅');
  }
  else if (message.content === '色狗') {
    const reply = await message.reply('https://media.discordapp.net/attachments/1023555311459651654/1101128720196042782/UnDldbZ.jpg');
    reply.react('✅');
  };
}
}

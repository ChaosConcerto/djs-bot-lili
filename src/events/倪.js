const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '倪走開') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1023555311459651654/1102120109956415618/222.gif')
      replay.react('✅')
  }
  else if (message.content === '最愛倪') {
    const reply = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1100284947316621354/40b99a75b68de16a.jpg');
    reply.react('✅');
  };
}
}

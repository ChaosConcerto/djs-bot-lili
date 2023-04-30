const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '!緣止') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1023555311459651654/1101129316856766534/f8fd21bf592ffce547c913556e7cf175.webp')
      replay.react('✅')
  }
  else if (message.content === '緣仆街') {
    const reply = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1081748333200162856/723447a030c24fb1.gif');
    reply.react('✅');
  }
  else if (message.content === '百變怪') {
    const reply = await message.reply('https://cdn.discordapp.com/attachments/1020572202917167126/1098587614119993404/3.gif');
    reply.react('✅');
  };
}
}

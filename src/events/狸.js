const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '巨巨狸') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1101847789354356808/82305e25ec9c7aa44f2c3c2342be0c0e113af3d6_hq.png')
      replay.react('✅')
  }
  else if (message.content === '狸') {
    const reply = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1101846141320040520/300px-399Bidoof.png');
    reply.react('✅');
  }
  else if (message.content === '一拳超狸') {
    const reply = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1101847692197507112/image-removebg-preview_1.png');
    reply.react('✅');
  }
  else if (message.content === '一拳超狸1') {
    const reply = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1101854187907711007/e38d9b0a1ca561be-removebg-preview_1.png');
    reply.react('✅');
  }
  else if (message.content === '狸生火') {
    const reply = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1119322901456367687/Untitled-video-Made-with-Clipc-unscreen_1.gif');
    reply.react('✅');
  }
  else if (message.content === '叮噹狸') {
    const reply = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1101855423251894322/A.JPG.jpg');
    reply.react('✅');
  };
}
}

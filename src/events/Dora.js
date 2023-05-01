const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === 'dora') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1020572202917167126/1102231031391719506/latest.png?width=456&height=676')
      replay.react('✅')
  };
}
}

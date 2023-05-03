const { Events } = require('discord.js');

module.exports = {
  name: Events.MessageCreate,
  async execute(message)  {
  if (message.content === '早安') {
    const replay = await message.reply('https://media.discordapp.net/attachments/1023555311459651654/1103207872537559110/20190118010800_oziol.png')
      replay.react('✅')
  };
}
}

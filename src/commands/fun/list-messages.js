const { SlashCommandBuilder } = require('@discordjs/builders');
const { readdirSync } = require('fs');
const path = require('path');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('list-messages')
		.setDescription('列出 events 資料夾中所有 JS 檔案中符合 message.content === \'\' 的內容'),
	async execute(interaction) {
		const eventsPath = path.join(__dirname, '..', 'events');  // 設定 events 資料夾的路徑
		const eventFiles = readdirSync(eventsPath).filter(file => file.endsWith('.js'));  // 取得 events 資料夾中所有 JS 檔案的名稱

		let output = '';  // 定義空字串用於儲存輸出的結果

		for (const file of eventFiles) {  // 迭代每個 JS 檔案
			const filePath = path.join(eventsPath, file);  // 取得檔案路徑
			const event = require(filePath);  // 載入該檔案

			if (event && typeof event.execute === 'function') {  // 確認檔案中存在 execute 函式
				output += `// ${file}\n`;  // 在輸出中加入檔案名稱的註解

				event.execute({  // 呼叫該檔案中的 execute 函式，傳遞一個模擬的 interaction 物件
					client: interaction.client,
					channel: {
						send: (msg) => {
							if (msg.content === '') {  // 如果符合條件
								output += `${msg.author.username}: ${msg.content}\n`;  // 將訊息作者和內容加入輸出
							}
						}
					}
				});
			}
		}

		if (output) {  // 如果有任何輸出
			await interaction.reply(`\`\`\`\n${output}\n\`\`\``);  // 將結果輸出到 Discord
		} else {
			await interaction.reply('沒有符合條件的內容。');
		}
	},
};

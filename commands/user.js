const { SlashCommandBuilder, Message, Client,GatewayIntentBits} = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('github')
        .setDescription('Bots author'),
    async execute(interaction){
        await interaction.reply(`[github](github.com/TolunayMutlu)`);
    },
};

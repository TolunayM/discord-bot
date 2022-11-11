const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');



module.exports = {
    data: new SlashCommandBuilder()
        
        .setName('ping')
        .setDescription('Latency'),
    async execute(interaction){
        const ping = interaction.client.ws.ping;
        const myEmbed = new EmbedBuilder()
    .setColor('White')
    .setTitle('Discord Latency')
    .addFields({
        name:"Discord Latency",value: `${ping}ms`,inline: true
    })
        await interaction.reply({embeds: [myEmbed]});
    },
};


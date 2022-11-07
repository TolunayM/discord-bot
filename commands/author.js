const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');



module.exports = {
    data: new SlashCommandBuilder()
        .setName('github')
        .setDescription('author'),
    async execute(interaction){
        const myEmbed = new EmbedBuilder()
    .setColor('White')
    .setAuthor({ name: 'Tolunay Mutlu', iconURL: 'https://avatars.githubusercontent.com/u/48354297?v=4', url: 'https://github.com/TolunayM' })
    .setImage('https://avatars.githubusercontent.com/u/48354297?v=4')
    .setTitle('If you click my name you can reach me on github 😎')
        await interaction.reply({embeds: [myEmbed]});
    },
};


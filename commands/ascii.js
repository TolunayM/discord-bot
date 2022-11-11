const {SlashCommandBuilder} = require('discord.js');

const ascii = {
    1: `▒▒▒▒▒▒▐███████▌
    ▒▒▒▒▒▒▐░▀░▀░▀░▌
    ▒▒▒▒▒▒▐▄▄▄▄▄▄▄▌
    ▄▀▀▀█▒▐░▀▀▄▀▀░▌▒█▀▀▀▄
    ▌▌▌▌▐▒▄▌░▄▄▄░▐▄▒▌▐▐▐▐
    `,
    2: `█──██████────██████──█
    █─██────██──██────██─█
    ─███─██─██████─██─███
    ──██────██──██────██
    ───██████────██████
    `,
    3: `╥━━━━━━━━╭━━╮━━┳
    ╢╭╮╭━━━━━┫┃▋▋━▅┣
    ╢┃╰┫┈┈┈┈┈┃┃┈┈╰┫┣
    ╢╰━┫┈┈┈┈┈╰╯╰┳━╯┣
    ╢┊┊┃┏┳┳━━┓┏┳┫┊┊┣
    ╨━━┗┛┗┛━━┗┛┗┛━━┻
    `,
    4: `¯\_( ͡❛ ͜ʖ ͡❛)_/¯`
}


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ascii')
        .setDescription("Random ascii"),
    async execute(interaction){
        
        const rand = Math.floor(Math.random() * 4) + 1;
        await interaction.reply(`${ascii[rand]}`); 
        }
};
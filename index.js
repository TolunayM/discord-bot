const { Client, Collection, Events,GatewayIntentBits, Presence} = require('discord.js');
const { token } = require('./config.json');


const client = new Client({
    intents: [GatewayIntentBits.Guilds],
    presence: {status: 'dnd',activities: [{name:'Seni', type: 3 , url:'https://www.youtube.com/watch?v=Ya3WXzEBL1E'}]},
    
});

const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname,'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

client.login(token);

client.once(Events.ClientReady, c =>{
    console.log(`Logged in as ${c.user.tag}`);
})


client.commands = new Collection();




for(const file of commandFiles){
    const filePath = path.join(commandsPath,file);
    const command = require(filePath);

    if('data' in command && 'execute' in command){
        client.commands.set(command.data.name,command);
    } else{
        console.log(`[Warning] The command at ${filePath} is missing a "data" or "execute" property.`);
    }
}

// geri bildirim olan kisim
client.on(Events.InteractionCreate, async interaction =>{
    if(!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    if(!command){
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }



    try{
        await command.execute(interaction);
    } catch(error){
        console.error(error);
        await interaction.reply({ content: " There was an error while executing this command!",ephemeral:true});
    }
    //console.log(interaction);
})
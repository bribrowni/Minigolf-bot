import Discord, { Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new Discord.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on("ready", () => {
    console.log("Bot is ready");
})

client.on("messageCreate", (msg) => {
    if(msg.content === "ping"){
        msg.reply({
            content:"pong",
        })
    }
})

client.login(process.env.TOKEN);
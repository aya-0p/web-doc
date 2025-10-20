import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
config();

const client = new Client({
  intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent]
});

client.on("messageCreate", (msg) => {
  if (msg.member?.user.bot) return;
  msg.reply("hello!");
})

client.login(process.env.TOKEN);


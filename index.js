const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const { Handler } = require('./util/commandHandler/index.js');
const eventHandler = require('./util/eventHandler/index.js');
eventHandler.loadEvents()
module.exports = bot;

bot.music = require("discord.js-musicbot-addon");
bot.music.start(bot, {youtubeKey: "AIzaSyBmys8BP-15YOpQGdaEWKcYsFHsqXy9SE4"});

bot.Handler = new Handler(bot, {
  directory: `${__dirname}/commands/`,
  prefixes: botconfig.prefix,
  owners: ["457578412467290122","390641279882756097"]
});

bot.login(botconfig.token);

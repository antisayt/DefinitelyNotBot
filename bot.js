const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'info') {
    	message.channel.send('Evo koje informacije treutno imam sto se tice kupovine overlay-a, banner-a, logotipa itd..

Dostupni su u roku od 2 dana nakon kupovine

Placanje je moguce jedino putem paypal i kreditnom karticom

Placanje se vrsi prije dobivanja proizvoda

Kupovinu izvrsi pisanjem komande kupovina');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

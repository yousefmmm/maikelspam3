const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543827648057573376")
setInterval(function() {
channel.send(`bye`);
}, 30)
})

client.login("NTQzODI0NDYyMTAyMDAzNzEz.D0CL3g.8G_yJUfjb_sByJyPlZ5ZgEFqOFM");

const { Client, MessageMedia } = require('whatsapp-web.js'),
	  qrcode = require('qrcode-terminal'),
	  colors = require("colors"),
	  fs = require("fs"),
	  path = require("path"),
	  config = require("./config.json");

sesjson = path.resolve(__dirname, 'session.json'),
sesdata = fs.existsSync(sesjson) ? require(sesjson) : null

const client = new Client({
  session: sesdata
});

client.on("authenticated", (session) => {
	fs.writeFile(sesjson, JSON.stringify(session), (err) => {
		if (err) console.log(err)
	})
});

client.on("auth_failure", () => {
	fs.unlink(sesjson, () => console.log("Erro na autenticação do whatsapp."))
});

client.on("change_battery", batteryInfo => {
	const { battery, plugged } = batteryInfo;
	var connection;
	if(plugged === false) { 
		connection = "Não" 
	} else { 
		connection = "Sim" 
	};
	
    console.log(`Bateria: ${battery}% - Carregando? ${connection}`.green);
});

client.on("disconnected", () => {
	fs.unlink(sesjson, () => console.log("Perca de conexão com o whatsapp."))
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true })
});

client.on('ready', () => {
    console.log('\n' + client.info.pushname + ' Conectado!\n\r'.brightCyan)
});

client.on('message', async msg => {
	
	if (msg.body == `${config.prefixo}ajuda`) {
		client.sendMessage(msg.from, 
		`*Lista de comandos:* \n• sticker - ${config.ajuda.sticker} \n• audio - ${config.ajuda.audio}`
		)
	};
    if (msg.body == `${config.prefixo}sticker` && msg.hasMedia) {
		
        const attachmentData = await msg.downloadMedia();
		client.sendMessage(msg.from, attachmentData, { sendMediaAsSticker: true });
    };
	if (msg.body == `${config.prefixo}audio`) {
		function audioGet(filePath) {
		let { MessageMedia } = require('whatsapp-web.js'),
		fs = require('fs'),
		mime = require('mime')

		return new MessageMedia(
			mime.getType(filePath),
			fs.readFileSync(filePath, {encoding: 'base64'}),
			path.basename(filePath)
		)
    }
	let audio = audioGet(path.resolve(__dirname, config.audio.audio_name))
	client.sendMessage(msg.from, audio, { sendAudioAsVoice: true })
	};
});

client.initialize();

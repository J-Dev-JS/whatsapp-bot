# Bot para WhatsApp em JavaScript
Um simples bot open source usando a NPM `whatsapp-web.js`, criado e liberado aqui com o intuito de ajudar iniciantes em programação que querem fazer seu primeiro projeto.

### NPMs usadas
- [whatsapp-web.js](https://www.npmjs.com/package/whatsapp-web.js)
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)
- [colors](https://www.npmjs.com/package/colors)
- [fs](https://www.npmjs.com/package/fs)
- [path](https://www.npmjs.com/package/path)

### Baixando as NPMs
> ```BATCH
> npm i whatsapp-web.js qrcode-terminal colors fs path

### Ligando o bot
> 1 - Inicie o bot normalmente usando o cmd no caminho do bot, com o comando `node server.js`
> 
> 2 - Após o QR Code ser gerado, leia ele usando a função de WhastAapp Web do seu WhatsApp.
> 
> 3 - Ao ler o QR Code, o console mostrará a mensagem `SEU NOME Conectado!` em ciano, assim, você poderá usar os comandos normalmente.
> 
> [Nota]: Peça ajuda para um amigo, pois os comandos não poderão ser usados por você mesmo. Você precisará de +1 pessoa para usar os comandos.

### Comandos
O bot até o momento possui somente 3 comandos `ajuda, sticker e audio`, pois acho desnecessário fazer vários comandos e liberar aqui, sendo que o foco em si é a criação do bot e o comando de figurinhas animadas. O comando de áudio foi apenas um brinde, pois acho muito complicado programadores novatos criarem esse comando que é bem interessante para quem quer criar um comando de música.

### Configurações básicas
Se deseja mudar o prefixo do bot, as mensagens de ajuda ou até mesmo o nome do áudio do comando `audio`, edite a `config.json` do bot e configure do modo que desejar. Por padrão, a `config.json` vem do seguinte modo:
> ```JSON
> {
>   "prefixo": "!!!",
>   "ajuda": {
> 	  "sticker": "Cria um sticker da imagem/gif desejada. ( stickers animados disponíveis! )",
> 	  "audio": "Envia um áudio desejado usando sua conta whatsapp."
>   },
>   "audio": {
> 	  "audio_name": "audio.mp3"
>   }
> }

### IMPORTANTE - Figurinhas animadas
Para criar figurinhas animadas usando o comando de sticker, você precisará baixar o [ffmpeg](https://www.mediafire.com/file/clvtrkmusbpo7fs/ffmpeg-2021-03-14-git-1d61a31497-full_build.rar/file) e adicionar o caminho da pasta bin dele como [variável do ambiente](https://professor-falken.com/pt/windows/como-configurar-la-ruta-y-las-variables-de-entorno-en-windows-10/) `PATH`. Ex.: `C:\Users\J-Dev-JS\Desktop\ffmpeg-2021-03-14-git-1d61a31497-full_build\bin`

# chatIo
Simple LAN tchat using Node.js and Socket.


## installation and run

```console

    > git clone https://github.com/patobeur/chatio.git
    > cd chatio
    > npm install
    > npm run dev
```
then start a web page on server ip. 

Exemple : http://192.168.1.105:3500 (must be your serveur ip adress)


## package json
```md
    {
        "name": "chatio",
        "version": "1.0.0",
        "description": "simple LAN tchat using node.JS and Socket.IO",
        "main": "server.mjs",
        "type": "module",
        "scripts": {
            "dev": "nodemon server.mjs",
            "start": "node server.mjs"
        },
        "author": "",
        "license": "ISC",
        "dependencies": {
            "express": "^4.21.2",
            "socket.io": "^4.7.5"
        },
        "devDependencies": {
            "nodemon": "^3.1.3"
        }
    }

```


https://nodejs.org/fr

https://socket.io/

and live server for local server : https://gist.github.com/donmccurdy/20fb112949324c92c5e8




![Mon Image](./public/assets/img/logoChat.png "Shema de la base de données relationelle.")
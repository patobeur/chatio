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
```json
    {
        "name": "chatio",
        "version": "1.0.0",
        "description": "Simple LAN tchat using Node.js and Socket.IO",
        "main": "server.mjs",
        "type": "module",
        "scripts": {
            "dev": "nodemon server.mjs",
            "start": "node server.mjs"
        },
        "author": "",
        "license": "ISC",
        "dependencies": {
            "express": "^4.17.1",
            "socket.io": "^4.1.3"
        },
        "devDependencies": {
            "nodemon": "^3.1.3"
        }
    }
```


https://nodejs.org/fr

https://socket.io/

and live server for local server : https://gist.github.com/donmccurdy/20fb112949324c92c5e8
# chatIo
![Mon Image](./public/assets/logoChat.png "Shema de la base de données relationelle.")

ChatIo est une application de messagerie instantanée en LAN (Local Area Network) utilisant Node.js et Socket.IO.

## Installation et exécution

### Prérequis

- [Node.js](https://nodejs.org/fr) installé sur votre machine
- [Socket.IO](https://socket.io/)
- [Live Server](https://gist.github.com/donmccurdy/20fb112949324c92c5e8) pour un serveur local

### Installation

```sh
# Cloner le dépôt
> git clone https://github.com/patobeur/chatio.git

# Se déplacer dans le répertoire du projet
> cd chatio

# Installer les dépendances
> npm install

# Installer les fix de sécurité
> npm audit fix
    _removed 1 package, changed 8 packages, and audited 121 packages in 2s_

# Démarrer le serveur en mode développement
> npm run dev
```


### Accès à l'application

Ouvrez votre navigateur et accédez à l'adresse IP du serveur.

Exemple : `http://192.168.1.105:3500` (remplacez par l'adresse IP de votre serveur).

---

## Fichier package.json

```json
{
    "name": "chatio",
    "version": "1.0.0",
    "description": "Application de chat en LAN utilisant Node.js et Socket.IO",
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

---

## English Version

# ChatIo

ChatIo is a simple LAN-based chat application using Node.js and Socket.IO.

## Installation and Execution

### Prerequisites

- [Node.js](https://nodejs.org/en) installed on your machine
- [Socket.IO](https://socket.io/)
- [Live Server](https://gist.github.com/donmccurdy/20fb112949324c92c5e8) for local server

### Installation

```sh
# Clone the repository
> git clone https://github.com/patobeur/chatio.git

# Navigate into the project directory
> cd chatio

# Install dependencies
> npm install

# Start the server in development mode
> npm run dev
```

### Accessing the Application

Open your web browser and navigate to the server's IP address.

Example: `http://192.168.1.105:3500` (replace with your actual server IP address).

---

## package.json File

```json
{
    "name": "chatio",
    "version": "1.0.0",
    "description": "Simple LAN chat application using Node.js and Socket.IO",
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

---

## Liens utiles / Useful Links

- [Node.js](https://nodejs.org/)
- [Socket.IO](https://socket.io/)
- [Live Server](https://gist.github.com/donmccurdy/20fb112949324c92c5e8)


```
>npm fund

chatio@1.0.0
├─┬ https://opencollective.com/express
│ │ └── express@4.21.2
│ ├── https://github.com/sponsors/sindresorhus
│ │   └── merge-descriptors@1.0.3, binary-extensions@2.3.0
│ ├── https://github.com/sponsors/ljharb
│ │   └── qs@6.13.0, side-channel@1.1.0, object-inspect@1.13.3, side-channel-list@1.0.0, side-channel-map@1.0.1, call-bound@1.0.3, function-bind@1.1.2, get-intrinsic@1.2.7, gopd@1.2.0, has-symbols@1.1.0, side-channel-weakmap@1.0.2
│ └── https://github.com/sponsors/feross
│     └── safe-buffer@5.2.1
└─┬ https://opencollective.com/nodemon
  │ └── nodemon@3.1.4
  └─┬ https://paulmillr.com/funding/
    │ └── chokidar@3.6.0
    └── https://github.com/sponsors/jonschlinkert
        └── picomatch@2.3.1
```
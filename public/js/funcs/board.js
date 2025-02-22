"use strict";
import { _front } from './front.js'
const _board = {
	roomsActive: false,
	roomButtonsActive: false,
	nameMinChar: 5,
	nameMaxChar: 12,
	divs: {},
	init: function () {
		this.divs['tankioDiv'] = document.getElementById('chatio')
		this.divs['tankioDiv'].textContent = '';

		this.divs['logo'] = _front.createDiv({ tag: 'img', attributes: { src: 'assets/logoChat.png', className: 'chat-logo', }, style: {width:'100%'} })
		this.divs['clientContainer'] = _front.createDiv({ tag: 'div', attributes: { className: 'client-container', }, style: {} })

		this.divs['tankioDiv'].appendChild(this.divs['logo']);
		this.divs['tankioDiv'].appendChild(this.divs['clientContainer']);

		this.divs['nameInput'] = _front.createDiv({ tag: 'input', attributes: { type: 'texte', placeholder: 'Enter your name (5 letters)...', className: 'name-input bad', textContent: '' }, style: {} })
		this.divs['nameNeeded'] = _front.createDiv({ tag: 'div', attributes: { className: 'nameneeded', }, style: {} })
		this.divs['nameNeededItem'] = _front.createDiv({ tag: 'div', attributes: { texteContent: '..qsdqsd.', className: 'nameneeded-item', }, style: {} })


		this.divs['nameNeeded'].appendChild(this.divs['nameNeededItem']);
		this.divs['nameNeeded'].appendChild(this.divs['nameInput']);
		this.divs['clientContainer'].appendChild(this.divs['nameNeeded']);

		// this.divs['clientContainer'].appendChild(this.divs['nameInput']);
	},
	add_RoomsButtons: function (rooms, enterRoomButtonCallback) {
		this.divs['rooms'] = _front.createDiv({ tag: 'div', attributes: { className: 'rooms', textContent: '' }, style: {} })
		this.divs['roomtitle'] = _front.createDiv({ tag: 'div', attributes: { className: 'room-item', textContent: 'Select a room' }, style: {} })
		rooms.forEach(element => {

			let roomName = 'room' + element
			this.divs[roomName] = _front.createDiv({ tag: 'div', attributes: { className: 'room-item', textContent: element }, style: {} })

			this.divs[roomName].addEventListener('click', (event) => { enterRoomButtonCallback(element) })

			this.divs['rooms'].appendChild(this.divs[roomName]);


		});
		this.divs['rooms'].prepend(this.divs['roomtitle']);
		this.divs['clientContainer'].appendChild(this.divs['rooms']);
		this.roomsActive = true
	},
	remove_RoomsButtons: function () {
		if (this.roomsActive) {
			this.divs['rooms'].remove()
			this.roomsActive = false
		}
	},

	remove_nameInput: function (nameInputCallback) {
		this.divs['nameInput'].value = ''
		this.divs['nameInput'].remove()
	},
	add_chatArea: function () {
		this.divs['tankioDiv'].classList.add('active')
		this.divs['chatContainer'] = _front.createDiv({ tag: 'div', attributes: { className: 'chat-container' }, style: {} })
		this.divs['chatArea'] = _front.createDiv({ tag: 'div', attributes: { className: 'chat-area' }, style: {} })
		this.divs['chatContainer'].appendChild(this.divs['chatArea']);

		this.divs['senderContainer'] = _front.createDiv({ tag: 'div', attributes: { className: 'send-container' }, style: {} })
		this.divs['inputMessage'] = _front.createDiv({ tag: 'input', attributes: { placeholder: 'message', className: 'message-area', textContent: '' }, style: {} })
		this.divs['sendMessageToRoomButton'] = _front.createDiv({ tag: 'button', attributes: { className: 'send-button', textContent: 'send' } })
		this.divs['senderContainer'].appendChild(this.divs['inputMessage']);
		this.divs['senderContainer'].appendChild(this.divs['sendMessageToRoomButton']);

		this.divs['chatContainer'].appendChild(this.divs['senderContainer']);
		this.divs['tankioDiv'].appendChild(this.divs['chatContainer']);

	},
	// add_Users: function () {
	// 	this.divs['tankioDiv'].classList.add('active')
	// 	this.divs['chatContainer'] = _front.createDiv({ tag: 'div', attributes: { className: 'chat-container' }, style: {} })
	// 	this.divs['chatArea'] = _front.createDiv({ tag: 'div', attributes: { className: 'chat-area' }, style: {} })
	// 	this.divs['chatContainer'].appendChild(this.divs['chatArea']);

	// 	this.divs['senderContainer'] = _front.createDiv({ tag: 'div', attributes: { className: 'send-container' }, style: {} })
	// 	this.divs['inputMessage'] = _front.createDiv({ tag: 'input', attributes: { placeholder: 'message', className: 'message-area', textContent: '' }, style: {} })
	// 	this.divs['sendMessageToRoomButton'] = _front.createDiv({ tag: 'button', attributes: { className: 'send-button', textContent: 'send' } })
	// 	this.divs['senderContainer'].appendChild(this.divs['inputMessage']);
	// 	this.divs['senderContainer'].appendChild(this.divs['sendMessageToRoomButton']);

	// 	this.divs['chatContainer'].appendChild(this.divs['senderContainer']);
	// 	this.divs['tankioDiv'].appendChild(this.divs['chatContainer']);

	// },
	add_roomers: function () {
		this.divs['roomers'] = _front.createDiv({ tag: 'div', attributes: { className: 'roomers', textContent: '' }, style: {} })
		this.divs['tankioDiv'].prepend(this.divs['roomers']);
	},
	refresh_roomers: function (paquet) {
		this.divs['roomers'].textContent = ''
		let users = paquet.users

		users.forEach(element => {
			// if (element.id != user.id) {
			let roomerName = 'roomer' + element.name
			this.divs[roomerName] = _front.createDiv({ tag: 'div', attributes: { className: 'roomers-item', title: element.name, textContent: element.name }, style: {} })
			this.divs['roomers'].appendChild(this.divs[roomerName]);
			// }
		});
	},
	// ---------------------
	nameStyleIfCorect: function (iscorect = false) {
		iscorect === true
			? this.divs['nameInput'].classList.remove('bad')
			: this.divs['nameInput'].classList.add('bad');
	},
}
const _console = {
	counter: new Number(0),
	messages: {},
	id: new Number(0),
	addMultipleMessages: function () {
		if (arguments.length > 0) {
			let args = arguments
			if (args.length > 1) {
				let fullmess = ''
				for (const key in args) {
					if (Object.hasOwnProperty.call(args, key)) {
						const element = args[key];
						let mess = ''
						if (typeof element === 'string' || typeof element === 'number' || typeof element === 'boolean') {
							mess = element + ''
						}
						else if (element.message && (typeof element.message === 'string' || typeof element.message === 'number' || typeof element.message === 'boolean')) {
							mess = element.message + ''
						}
						if (mess != '') {
							let virgule = (fullmess != '') ? ', ' : ''
							fullmess = fullmess + virgule + mess
						}
					}
				}
				if (fullmess != '') {
					// TODO 
					// fullmess = _front.sanitize(fullmess)
					console.log('---------------------------fullmess1', fullmess)
					this.addUniqueMessage(fullmess)
				}
			}
			else if (args.length === 1) {
				let mess = ''
				if (typeof args[0] === 'string' || typeof args[0] === 'number' || typeof args[0] === 'boolean') {
					mess = args[0]
				}
				else if (args[0].message) {
					if (typeof args[0].message === 'string' || typeof args[0] === 'number' || typeof args[0] === 'boolean') {
						mess = args[0].message
					}
				}
				if (mess != '') {
					// TODO 
					this.addUniqueMessage(mess)
				}
			}
		}
	},
	addUniqueMessage: function (message) {
		let newMess = _front.createDiv({
			tag: 'div', attributes: {
				id: 'message_' + this.id,
				className: 'message',
			}
		});
		let newSpan = _front.createDiv({
			tag: 'span', attributes: {
				// textContent: '[' + (this.counter < 10 ? '0' : '') + this.counter + '] ' + message
				textContent: message
			}
		});
		newSpan.classList.add('new')
		setTimeout(() => {
			newSpan.classList.remove('new')
		}, 1000);
		newMess.appendChild(newSpan)
		this.messages[this.id] = newMess;
		this.id++;
		this.counter++;
		_board.divs['chatArea'].appendChild(newMess)
		// this.scrollerDiv.scroll(0, 10000)
		_board.divs['chatArea'].scroll(0, _board.divs['chatArea'].scrollHeight)
	},
}
const _names = {
	name: null,
	lettreParFrequences: [
		['E', 14.71], ['A', 9.24], ['I', 8.66], ['O', 7.11],
		['U', 7.10],//5.73
		['N', 6.63], ['R', 6.37], ['T', 6.13], ['S', 5.99],
		// ['U', 5.73],//5.73
		['L', 5.45], ['D', 3.47], ['M', 3.11], ['C', 3.11], ['P', 2.89], ['V', 1.42],
		['G', 1.21], ['B', 0.96], ['F', 0.95], ['H', 0.92], ['J', 0.68], ['Q', 0.65],
		['K', 0.05], ['W', 0.04], ['X', 0.03], ['Y', 0.03], ['Z', 0.01],
	],
	donneUneLettre: function () {
		// Choisir la lettre en fonction de sa fréquence 
		const frequenceTotal = this.lettreParFrequences.reduce((sum, [lettre, frequence]) => sum + frequence, 0)
		const randomValue = Math.random() * frequenceTotal
		let cumulativefrequence = 0
		for (const [lettre, frequence] of this.lettreParFrequences) {
			cumulativefrequence += frequence
			if (randomValue <= cumulativefrequence) {
				return lettre
			}
		}
		return '_' // en cas d'erreur '_' 
	},
	getAName: function () {
		const nameLength = Math.floor(Math.random() * 4) + 5 // Longueur aléatoire entre 5 et 8 caractères
		let firstName = ''
		for (let i = 0; i < nameLength; i++) {
			firstName += this.donneUneLettre()
		}
		return firstName
	},
	getAnId: function (num) {
		let id = ''
		for (let i = 0; i < num; i++) {
			id += String.fromCharCode(65 + Math.floor(Math.random() * 26))
		}
		return id
	}
};
const _genererCouleurHex = function () {
	let couleur = '#';
	for (let i = 0; i < 6; i++) {
		couleur += Math.floor(Math.random() * 16).toString(16); // Génère un chiffre hexadécimal aléatoire (de 0 à 15)
	}
	return couleur.toUpperCase();
}
export { _board, _console, _names, _front, _genererCouleurHex }

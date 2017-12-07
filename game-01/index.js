const Game = require('../libs/sc-core')
Game.on('update', () => {console.log('Yo, man!')})
Game.run()

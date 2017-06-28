const Game = require('./sc-modules/core')

Game.on('update', () => {console.log('Yo, man!')})

Game.run()

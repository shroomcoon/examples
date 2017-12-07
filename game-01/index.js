const Game = require('../libs/sc-core')

Game.on('update', () => {
  console.log('Yo, man!')
})

Game.on('myCustomEvent', () => {
  console.log('Custom event fired!')
})

Game.run()
Game.emit('myCustomEvent')

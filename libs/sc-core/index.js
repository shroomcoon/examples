const Emitter = require('./Emitter.js')

function update() {
  Emitter.emit('update')
}

const Game = {
  on: (event, fn) => {
    Emitter.subscribe(event, fn)
  },

  emit: (event) =>  {
    Emitter.emit(event)
  },

  run: () => {
    setInterval(update, 500)
  }
}

module.exports = Game

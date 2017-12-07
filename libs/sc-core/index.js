const Emitter = require('./Emitter.js')

function update() {
  Emitter.emit('update')
}

const Game = {
  emit: (event) =>  {
    Emitter.emit(event)
  },

  on: (event, fn) => {
    Emitter.subscribe(event, fn)
  },

  run: () => {
    setInterval(update, 500)
  }
}

module.exports = Game

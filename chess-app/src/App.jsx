import React, { useState } from 'react'
// import Chess from 'chess.js'
import Chessboard from 'chessboardjsx'

// let game = new Chess()

const App = () => {
  // const [gamestatus, setGamestatus] = useState("Let's play")
  // const [position, setPosition] = useState('start')

  // const onDragStart = (source, piece, position, orientation) => {
  //   if (game.game_over()) return false
  //   if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
  //       (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
  //         return false
  //       }
  //   console.log(game.fen())
  // }

  // console.log(game.moves())
  // console.log(game.fen())

  // const onSnapEnd = () => {
  //   console.log(game.fen())
  // }

  // const onDrop = (source, target) => {
  //   const move = game.move({
  //     from: source,
  //     to: target,
  //     promotion: 'q'
  //   })

  //   if (move === null) return 'snapback'

  //   updateStatus()
  // }

  // const updateStatus = () => {
  //   let status = ''
  //   let moveColor = 'White'
  //   if (game.turn() === 'b') {
  //     moveColor = 'Black'
  //   }
  //   if (game.in_checkmate()) {
  //     status = 'Game over, ' + moveColor + ' is in checkmate.'
  //   }
  //   else if (game.in_draw()) {
  //     status = 'Game over, drawn position'
  //   }
  //   else {
  //     status = moveColor + ' to move'
  //     if (game.in_check()) {
  //       status += ', ' + moveColor + ' is in check'
  //     }
  //   }
  //   setGamestatus(status)
  //   setPosition(game.fen())
  // }

  return (
    <div>
      A game of Chess
      <Chessboard 
        position='start'
        draggable={true}
      />
    </div>
  )
}

export default App
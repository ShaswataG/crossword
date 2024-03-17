import React from "react"
import Crossword from '@jaredreisinger/react-crossword';

export default function Puzzle() {
    const [win, setWin] = React.useState(false)

    const data = {
      across: {
        1: {
          clue: 'one plus one',
          answer: 'TWO',
          row: 0,
          col: 0,
        },
        // 2: {
        //   clue: 'one plus one',
        //   answer: 'TWO',
        //   row: 1,
        //   col: 0,
        // },
      },
      down: {
        3: {
          clue: 'three minus two',
          answer: 'ONE',
          row: 0,
          col: 2,
        },
        // 4: {
        //   clue: 'one plus one',
        //   answer: 'TWO',
        //   row: 3,
        //   col: 4,
        // },
      },
    }
  
    const checkAnswers= () => {
      console.log("win")
      setWin(true)
    }
  
    return (
      <div className="puzzle">
        <h1>PHOENIX 2024</h1>
        <Crossword data={data} onCrosswordCorrect={checkAnswers}/>
        {win && <h1>yguyg</h1>}
      </div>
    )
}
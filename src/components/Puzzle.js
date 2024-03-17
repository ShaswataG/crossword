import React, { useEffect, useRef } from 'react'
import data from '../data'
import Crossword from '@jaredreisinger/react-crossword'
import Confetti from 'react-confetti'

export default function Puzzle() {
	const [win, setWin] = React.useState(false)
  const [loose, setLoose] = React.useState(false)
  const [multipleSubmit, setMultipleSubmit] = React.useState(false)
	const puzzleRef = useRef(Crossword)

	const checkAnswers = () => {
    if (!win && !loose) {
      const status = puzzleRef.current.isCrosswordCorrect()
      console.log('win')
      setWin(status)
      setLoose(!status)
    } else {
      setMultipleSubmit(true)
    }
	}

  const showAnswers = () => {
    puzzleRef.current.fillAllAnswers()
    setLoose(true)
  }

  const reset = () => {
    puzzleRef.current.reset()
    setWin(false)
    setLoose(false)
    setMultipleSubmit(false)
  }

	useEffect(() => {
		reset()
	}, [])

	return (
		<div className="puzzle">
      {win && <Confetti height="4000vh"/>}
			<h1>CROSSWORD</h1>
      <div className='crossword-box'>
        <Crossword
          ref={puzzleRef}
          data={data}
          // onCrosswordCorrect={checkAnswers}
          // onCellChange={(a, b, c) => console.log('change', a, b, c)}
        />
      </div>
      <div className='warning'>
        {multipleSubmit && <span><h3>You can't submit more than once</h3></span>}
      </div>
      <div className='buttons'>
        <button onClick={checkAnswers}>Submit</button>
        {/* <button onClick={showAnswers}>Show Answers</button> */}
        <button onClick={reset}>Reset</button>
      </div>
      <div className='results'>
        {win && <div><h1>Congratulations!</h1><br/><h1>You won</h1></div>}
        {loose && <h1>You lost</h1>}
      </div>
    </div>
	)
}
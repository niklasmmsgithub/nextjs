import { useEffect, useState } from "react";
import { useWordle, WordleProvider } from "./wordle-context";
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Letter = styled.span.attrs(props => ({
    status: props.status
}))`
    font-size: 16px;
    color: ${props => props.status === 1 ? "green" : props.status === 2 ? "orange" : "black"}
`

const Guess = (props) => {
    return <Letter status={1}>{props.guess}</Letter>
}

const GuessTracker = () => {
    const {
        state: {
            word,
            guesses,
            guessCount
        },
      } = useWordle();

    console.log("guesses", guesses);

    const renderGuesses = () => <ul>{guesses.map(g => <Guess guess={g} correctWord={word} />)}</ul>

    return <span>Guesses: {guessCount} {renderGuesses()}</span>
}

const GuessInput = () => {
    const { dispatch } = useWordle();
    const [guess, setGuess] = useState("");

    return (
        <>
            <input type="text" onChange={(e) => setGuess(e.currentTarget.value)} maxLength="5" />
            <button disabled={guess.length !== 5} onClick={() => dispatch({ type: 'guess', guess: guess })}>Guess</button>
        </>
    )
}

const Wordle = () => {
    return (
        <WordleProvider>
            <Container>
                <GuessTracker />
                <GuessInput />
            </Container>
        </WordleProvider>
    )
}

export default Wordle;
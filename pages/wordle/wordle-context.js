import * as React from 'react'

const WordleContext = React.createContext()

const wordleReducer = (state, action) => {
  switch (action.type) {
    case 'guess': {
      const newGuesses = state.guesses.slice();
      newGuesses.push(action.guess);
      return {
        guessCount: state.guessCount + 1,
        guesses: newGuesses
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const WordleProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(wordleReducer, {
    word: "",
    guessCount: 0,
    guesses: []
  })
  const value = {state, dispatch}
  return <WordleContext.Provider value={value}>{children}</WordleContext.Provider>
}

function useWordle() {
  const context = React.useContext(WordleContext)
  if (context === undefined) {
    throw new Error('useWordle must be used within a WordleProvider')
  }
  return context
}

export {WordleProvider, useWordle}
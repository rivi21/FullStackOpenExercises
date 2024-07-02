import { useState } from 'react'

const Title = (props) => <h1>{props.text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Anecdote = ({anecdote}) => <p>{anecdote}</p>

const Votes = ({votes}) => <p>has {votes} votes</p>

const App = () => {
  // const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 }
  // const points = [0, 0, 0, 0, 0, 0, 0, 0 ]
  const points = new Array(8).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const handleClick = () => {
    const number = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
    const updateSelected = number;
    setSelected(updateSelected);
  };

  const handleVotes = () => {
    // const copy = {...votes};
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  const greatest = votes.indexOf(Math.max(...votes));

  return (
    <>
      <Title text='Anecdote of the day' />
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes votes={votes[selected]}/>
      <Button handleClick={handleVotes} text='vote' />
      <Button handleClick={handleClick} text='next anecdote'/>
      <Title text='Anecdote with most votes' />
      <Anecdote anecdote={anecdotes[greatest]} />
    </>
  )
}

export default App

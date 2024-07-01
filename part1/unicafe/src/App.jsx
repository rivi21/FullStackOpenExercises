import { useState } from 'react'

const Title = (props) => <h1>{props.text}</h1>
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistics = (props) => {
  const average = (props.value[4].length) ? props.value[4].reduce((a,b) => a+b) / props.value[3] : null;
  const positive = props.value[0] * 100 / props.value[3]

  if(props.value[3] > 0) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text={'good'} value={props.value[0]} />
            <StatisticLine text={'neutral'} value={props.value[1]} />
            <StatisticLine text={'bad'} value={props.value[2]} />
            <StatisticLine text={'all'} value={props.value[3]} />
            <StatisticLine text={'average'} value={average} />
            <StatisticLine text={'positive'} value={positive} />
          </tbody>
        </table>
      </div>
    )
  }
  return (<p>No feedback given</p>)
}

const StatisticLine = ({text, value}) => {
  if(text == 'positive' ) {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [clicksValues, setClicksValues] = useState([])

  const  handleClick = (text) => {

    const updatedAll = all + 1;
    setAll(updatedAll);

    if (text =='good') {
      const updatedGood = good + 1;
      setGood(updatedGood);
      const updatedList = clicksValues.concat(1);
      setClicksValues(updatedList);
    }
    else if (text == 'neutral') {
      const updatedNeutral = neutral + 1;
      setNeutral(updatedNeutral);
      const updatedList = clicksValues.concat(0);
      setClicksValues(updatedList);
    }
    else if (text == 'bad') {
      const updatedBad = bad + 1;
      setBad(updatedBad);
      const updatedList = clicksValues.concat(-1);
      setClicksValues(updatedList);
    }
  }

  return (
    <>
      <Title text='give feedBack' />
      <Button handleClick={() => handleClick('good')} text={'good'} />
      <Button handleClick={() => handleClick('neutral')} text={'neutral'} />
      <Button handleClick={() => handleClick('bad')} text={'bad'} />
      <Title text='statistics' />
      <Statistics value={[good, neutral, bad, all, clicksValues]} />
    </>
  )
}

export default App
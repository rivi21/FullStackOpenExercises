const Header = (props) =>{
  return (
    <h1>{props.course}</h1>
  )
}

const Content = ({data}) => {
  return (
    <div>
      <Part part={data[0]} exercises={data[1]} />
      <Part part={data[2]} exercises={data[3]} />
      <Part part={data[4]} exercises={data[5]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course}/>
      <Content data={[part1 ,exercises1, part2, exercises2, part3, exercises3]}/>
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

export default App

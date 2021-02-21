import React from 'react';
import Header from './Header'
import Total from './Total'

const App: React.FC = () => {
  const courseName = "Half Stack application development"
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ]

  return (
    <div>
      <Header courseName={courseName} />
      <p>
        {courseParts[0].name} {courseParts[0].exerciseCount}
      </p>
      <p>
        {courseParts[1].name} {courseParts[1].exerciseCount}
      </p>
      <p>
        {courseParts[2].name} {courseParts[2].exerciseCount}
      </p>
      <Total courseParts={courseParts} />
    </div>
  )
}
export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

// new types
interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartOne extends CoursePartBase, Description {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartBase, Description {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

interface Description extends CoursePartBase {
  description: string;
}

interface MyInterface extends CoursePartBase, Description {
  name: "My interface"
}

export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | MyInterface


ReactDOM.render(<App />, document.querySelector("#root"))
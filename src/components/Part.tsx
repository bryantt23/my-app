import React from 'react'
import { CoursePart } from "../index";
interface PartProps {
    course: CoursePart;
}


const Part: React.FC<PartProps> = ({ course }) => {
    console.log(course);
    switch (course.name) {
        case "Fundamentals":
            return (
                <div>{course.name} {course.exerciseCount} {course.description}</div>
            )
        case "Deeper type usage":
            return (
                <div>{course.name} {course.exerciseCount} {course.description} {course.exerciseSubmissionLink}</div>
            )
        case "Using props to pass data":
            return (
                <div>{course.name} {course.exerciseCount} {course.groupProjectCount}</div>
            )
        case "My interface":
            return (
                <div>{course.name} {course.exerciseCount} {course.description}</div>
            )
        default:
            break;
    }



    return (
        null
    )
}

export default Part

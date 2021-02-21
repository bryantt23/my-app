import React from 'react'
import Part from './Part'
import { CoursePart } from "../index";

interface ContentProps {
    courses: Array<CoursePart>;
}

const Content: React.FC<ContentProps> = ({ courses }) => {
    return (
        <div>
            {courses.map((course, i) =>
                <Part key={i} course={course} />
            )}
        </div>
    )
}

export default Content

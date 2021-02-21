import React from 'react'
interface ContentProps {
    courseParts: Array<{ exerciseCount: number, name: string }>;
}

const Content: React.FC<ContentProps> = ({ courseParts }) => {
    return (
        <div>
            {courseParts.map((coursePart, i) => <p key={i}>
                {coursePart.name} {coursePart.exerciseCount}
            </p>)}
        </div>
    )
}

export default Content

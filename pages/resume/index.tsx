import React from 'react'

const Resume: React.FC = () => {
    return (
        <div style={{ width: '90vw', margin: '0 auto' }}>
            <iframe src="/resume.pdf" frameBorder="0" style={{ width: '90vw', height: '100vh' }}></iframe>
        </div>
    )
}

export default Resume
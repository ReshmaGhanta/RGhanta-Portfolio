import React from 'react'
import Starfield from 'react-starfield';

const Background = () => {
  return (
    <Starfield
        starCount={10000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="#03060D"
    />
  )
}

export default Background
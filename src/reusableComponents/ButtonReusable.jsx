import React from 'react'

const ButtonReusable = (props) => {
    const {label,onClick,customStyle}=props.data;
  return (
    <button className='bttn' onClick={onClick} style={customStyle}>
        {label}
    </button>
  )
}

export default ButtonReusable
import React from 'react'

const ImagesReusable = ({data}) => {
    const {source,customStyle=''}=data || {};
    if (!source) return null;

  return (
    <img src={source} alt="Avtar" className={customStyle} />
  )
}

export default ImagesReusable;
import React from 'react'

function BaseIcon ({src, height, width, handleClick, ...restProps}) {
  return (
    <img
      src={src}
      style={{
        height: height,
        width: width,
      }}
      {...restProps}
      onClick={handleClick}
    />
  )
}

BaseIcon.defaultProps = {
  height: 'auto',
  width: 'auto',
}

export default BaseIcon
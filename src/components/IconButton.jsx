import React from 'react'

const IconButton = ({title, icon, bgColor, color, handleClick, reverseIcone, isDisabled}) => {
  return (
    <>
      <button 
        type='button'
        className={`px-4 py-2 flex ${reverseIcone ? 'flex-row-reverse' : ''} gap-1 items-center rounded-lg transition-all text-xl active:scale-110 hover:shadow-lg hover:-translate-y-1 bg-brand-main-color`} 
        onClick={handleClick}
        style={{backgroundColor: bgColor, color: color}}
        disabled={isDisabled}
      >
        <span>{title}</span>
        <span>{icon}</span>
      </button>
    </>
  )
}

export default IconButton
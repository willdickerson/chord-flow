import React from 'react'
import { KeyProps } from '../types'

export const Key: React.FC<KeyProps> = ({
  midiNote,
  isBlack,
  x,
  width,
  height,
  isActive,
  onMouseDown,
  onMouseUp,
  onMouseEnter,
  onMouseLeave,
}) => {
  const className = isBlack
    ? `fill-gray-800 hover:fill-gray-700 active:fill-gray-600 ${isActive ? 'fill-purple-700' : ''}`
    : `fill-white hover:fill-gray-50 active:fill-gray-100 ${isActive ? 'fill-purple-100' : ''}`

  return (
    <rect
      x={x}
      y={0}
      width={width}
      height={height}
      className={`${className} stroke-gray-300`}
      onMouseDown={() => onMouseDown(midiNote)}
      onMouseUp={() => onMouseUp(midiNote)}
      onMouseEnter={() => onMouseEnter(midiNote)}
      onMouseLeave={() => onMouseLeave(midiNote)}
    />
  )
}

import React from 'react';

export default function button({type, className, value, onClick, innerText}) {
  return (
    <div>
      <button type = {type} className = {className} value = {value} onClick = {onClick}>{innerText}</button>
    </div>
  )
}
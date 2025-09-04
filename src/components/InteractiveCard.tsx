'use client';
import React from 'react';

export default function InteractiveCard( { children, contentName  } : { children: React.ReactNode, contentName:string } ) {

  function onCardSelected() {
    alert("Card selected: " + contentName);
  }

  function onCardMouseAction(event: React.SyntheticEvent) {
    if(event.type === 'mouseover') {
        event.currentTarget.classList.remove('shadow-lg', 'bg-white');
        event.currentTarget.classList.add('shadow-2xl', 'bg-neutral-200');
    }
    else if(event.type === 'mouseout') {
        event.currentTarget.classList.remove('shadow-2xl', 'bg-neutral-200');
        event.currentTarget.classList.add('shadow-lg', 'bg-white');        
    }
  }

  return (
    <div className='w-1/5 h-[300px] rounded-lg shadow-lg m-4 cursor-pointer hover:scale-105 transition-transform duration-300 bg-white' 
    onClick={() => onCardSelected()}
    onMouseOver={(e) => onCardMouseAction(e)}
    onMouseOut={(e) => onCardMouseAction(e)}>
        {children}
    </div>
  );
}
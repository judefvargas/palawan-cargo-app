import React, { useState, useEffect, } from 'react'
import './mainnav.css';
import Interaction from './Interaction';
import Webobject from './Webobject';
import Distractors from './Distractors';
import { shouldStart, } from '../../customer';

export default function MainNav(props) {
  let currentConversation = JSON.parse(localStorage.getItem('CHAT_currentConvoPos'));
  
  const [isOn, turnOn] = useState(false); //Start toggle

  useEffect(() => {
    if ((currentConversation!==null && currentConversation.length!==0) || shouldStart) {
      turnOn(true);
    }
  }, [])
  const [hasTill, updateTill] = useState(false); //TILL toggle
  const [element, updateEl] = useState(null); //element shown on TILL
  const [tillBtnClick, updateTillClick] = useState(false); 
  const { active, next, done, } = props;

  return (
    <div className="row grid-main-nav">
      <Interaction 
        active={active} 
        on={isOn} 
        turnOn={() => {turnOn(true)}} 
        next={next}
        done={done}
        updateTill={ (val)=>{ updateTill(val) } } 
        tillBtnClick={tillBtnClick} 
        updateEl={(val)=>{updateEl(val)}} 
        updateTillClick={(val)=>{updateTillClick(val)}} />

      <Webobject 
        active={active} 
        tillBtnClick={tillBtnClick} 
        on={isOn} 
        till={hasTill} 
        updateTillClick={(val)=>{updateTillClick(val)}} 
        updateEl={(val)=>{updateEl(val)}} 
        element={element}/>

      <Distractors active={active} />
    </div>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'
import './OurWork.css'

function OurWorkCard(props) {
  const navigate = useNavigate();
  return (
    <div className='ourworkcard' style={{backgroundImage: 'url(' + props.image + ')'}} onClick={() => {navigate(props.link); window.scroll(0,0)}}>
      
    </div>
  )
}

export default OurWorkCard

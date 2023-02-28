import React from 'react'
import './PackageCard.css';

function PackageCard(props) {
  return (
    <div className='packagecard'>
      <p className='package-title'>{props.title}</p>
      <p className='package-price'>{props.price}</p>
      <ul>
      {
        props.incl.map(function(item) {
            return <li>
                <img className='check' src='../../../assets/check-icon.svg' alt='check' />
                {item}
            </li>
        })
      }
      {
        props.notincl.map(function(item) {
            return <li>
                <div className='blank'></div>
                {item}
            </li>
        })
      }
      </ul>
    </div>
  )
}

export default PackageCard

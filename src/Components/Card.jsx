import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <img src='../images/photo1.png' className='card_photo'/>
        <div className='card_stars'>
            <img src='../images/star.png' className='card_star'/>
            <span>5.0</span>
            <span className='gray'>(6) .</span>
            <span className='gray'>USA</span>
        </div>
        <p>Life lesson</p>
        <p><span className='bold'>From $136</span></p>
    </div>
  )
}

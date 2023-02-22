import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ServicesBar.css'

function ServicesBar(props) {
  // document.querySelectorAll('.menu-item').forEach(function(item){
  //   item.classList.remove('active');
  // });
  // if(window.location.pathname === '/services/web-development'){
  //   document.querySelector('.web').classList.add('active');
  // } else if(window.location.pathname === '/services/ui-design') {
  //   document.querySelector('.ui').classList.add('active');
  // } else if(window.location.pathname === '/services/logo-design') {
  //   document.querySelector('.logo').classList.add('active');
  // } else if(window.location.pathname === '/services/video-editing') {
  //   document.querySelector('.video').classList.add('active');
  // } else if(window.location.pathname === '/services/thumbnail-design') {
  //   document.querySelector('.thumb').classList.add('active');
  // }
  

  useEffect(() => {
    document.querySelectorAll('.menu-item').forEach(function(item) {
      if(item.classList[2] === 'active') {
        item.classList.remove('active');
      }
    });
    if(props.class){
      document.querySelector('.'+ props.class).classList.add('active');
    }
  });
  

  return (
    <div className='services-menu'>
        <Link to='/services/web-development'><div className='menu-item web'>Web Development</div></Link>
        <Link to='/services/ui-design'><div className='menu-item ui'>UI Design</div></Link>
        <Link to='/services/logo-design'><div className='menu-item logodesign'>Logo Design</div></Link>
        <Link to='/services/video-editing'><div className='menu-item video'>Video Editing</div></Link>
        <Link to='/services/thumbnail-design'><div className='menu-item thumb'>Thumbnail Design</div></Link>
    </div>
  )
}

export default ServicesBar

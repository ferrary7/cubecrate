import React from 'react'
import PackageCard from '../Prices/PackageCard'
import './Projects.css'
import WebCard from './WebCard'

function WebProjects() {
  return (
    <div className='web-projects services'>
        <h2>Web Development</h2>
        <p>Custom website design and development services that deliver responsive websites tailored to your business needs.</p>
        <div className='cards-container flex'>
            <WebCard
              image='../../../assets/storygiri.png'
              title='Storygiri'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              button='Visit Site'
              link='https://storygiri.com/'
            />
        </div>

        
        <h2>Packages</h2>
        <div className='cards-container flex'>
          <PackageCard
            title = 'Basic'
            price = '$40'
            incl = {['1 Page', '3 Days Delivery', '1 Revision', 'Responsive', 'Source Code']}
            notincl = {['Custom Design', 'Deployment']}
          />
          <PackageCard
            title = 'Standard'
            price = '$129'
            incl = {['5 Pages', '10 Days Delivery', '3 Revisions', 'Responsive', 'Source Code', 'Custom Design']}
            notincl = {['Deployment']}
          />
          <PackageCard
            title = 'Premium'
            price = '$249'
            incl = {['10 Pages', '20 Days Delivery', '5 Revisions', 'Responsive', 'Source Code', 'Custom Design', 'Deployment']}
            notincl = {[]}
          />
        </div>
    </div>
  )
}

export default WebProjects

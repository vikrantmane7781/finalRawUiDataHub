import React from 'react'
import "./main.css"
import NavBarAg from './NavBarAg'
import Selectors from './Selectors'
import CartsDiv from './CartsDiv'

function AggregatedView() {
  return (
    <div className='AggrView'>
        {/** Navbar started */}
            <NavBarAg />
        {/**Navbar ended */}
        <Selectors />
        {/** charts of section */}
        <CartsDiv />
    </div>
  )
}

export default AggregatedView
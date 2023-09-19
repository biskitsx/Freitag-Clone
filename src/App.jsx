import { useState } from 'react'
import './App.css'
import Bag from './components/Bag'
import item from './data'

function App() {
    const bags = item.map((bag,index)=> {
        return <Bag key={index} picture={bag.picture} name={bag.name} info={bag.info}/>
    })

    const geniuePic = "https://freitag.rokka.io/freitag_1224_689_2x_focal_scale_crop/6304866fa83bf767f25048106cbe0d6e18bd08cb/storelocator-mood.jpg?h=84071268&itok=YDSfe6-i" ;

    console.log(bags);

    return (
        <>
            <nav>
                <div className="container">
                    <img src='https://www.freitag.ch/themes/custom/freitag/dist/images/logo.svg' alt="" />
                </div>
            </nav>

            <div className="main">
                <div className="container">
                    <h3>RARITIES FESTIVAL</h3>
                    <h4>JAN 11 - FEB12,2023</h4>
                    <p>Rarities are unique, like you and me. They may not be flawless, but they still work perfectly.</p>
                    <p>FREITAG rarities are unique items with tiny production defects. The flaws are often so small that even we don’t know what exactly they are or where they’re hiding. You can easily recognize rarities because they’re stamped with an "R" and come at a low price.</p>
                    <p><span>Rules of the game</span>: no exchanges, no returns, no repairs and no warranty.</p>
                </div>
            </div>

            <div className="grid-item">
                <div className="container">
                    {bags}
                </div>
            </div>

            <div className="genuine">
                <div className="container">
                    <img src="https://freitag.rokka.io/freitag_1224_689_2x_focal_scale_crop/6304866fa83bf767f25048106cbe0d6e18bd08cb/storelocator-mood.jpg?h=84071268&itok=YDSfe6-i" alt="" />
                    <div className="genuine-area">
                        <h3>GENUINE RARITIES</h3>
                        <p>You can also find the Rarities Festival offline at selected FREITAG stores.</p>
                        <button>TO THE STORE OVERVIEW</button>
                    </div>

                </div>
            </div>
                        {/* <p>Sign up now for the FREITAG newsletter and, as a personal friend of the brand, be the first to know about unique bags and innovative materials and get lots of love from the F‑Crew.</p> */}
        </>
    )
}

export default App

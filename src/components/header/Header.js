import React,{useState} from 'react'
import './header.css'
import Mobile from './mobile/Mobile'
import Web from './web/Web'

function Header() {
    const [isOpen, setisOpen] = useState(false)
    return (
        <div className='header'>
            <div className="logo">MADHUSHRABA</div>
            <div className="menu">
                <div className="web-menu">
                    <Web/>
                </div>
                <div className="mobile-menu">
                    <div className="" onClick={() => setisOpen(!isOpen)}>
                <i class="fi fi-rr-list menu-icon"></i></div>
                {isOpen && <Mobile isOpen={isOpen} setisOpen={setisOpen}/>}
                </div>
            </div>
        </div>
    )
}

export default Header

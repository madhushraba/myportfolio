import React from 'react'
import './web.css'

function Web() {
    return (
        <div className='web'>
            <div className="web-option">
                <a href="#project"><i class="fi fi-rr-book-alt option-icon"></i></a>
            </div>
            <div className="web-option">
                <a href="https://google.com"><i class="fi fi-rr-computer"></i></a>
            </div>
            <div className="web-option">
                <a href="#skills"><i class="fi fi-rr-browser"></i></a>
            </div>
            <div className="web-option">
                <a href="#contact"><i class="fi fi-rr-user-remove"></i></a>
            </div>
        </div>
    )
}

export default Web

import React from 'react'
import Header from './Header';

// Styles
import './Layout.css'

function Layout(props) {
    return (
        <React.Fragment>
            <Header />
            <main id='main'>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout

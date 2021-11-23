import React from 'react'
import Alert from 'react-bootstrap/Alert';

import './AlertBox.css';

function AlertBox({title, variant}) {
    return (
        <div className='alert-box'>
            <Alert variant={variant}>
                {title}
            </Alert>
        </div>
    )
}

export default AlertBox

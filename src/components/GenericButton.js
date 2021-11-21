import React from 'react'

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

function GenericButton({text, Icon, variant, onClick, classList}) {
    return (
        <Button variant={variant} onClick={onClick} className={classList}>
            {Icon && <Icon />} {text}
        </Button>
    )
}

export default GenericButton

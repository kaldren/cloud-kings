import React from 'react'

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

function GenericButton({text, Icon, variant, onClick}) {
    return (
        <Button variant={variant} onClick={onClick}>
            {Icon && <Icon />} {text}
        </Button>
    )
}

export default GenericButton

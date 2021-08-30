import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { Button } from '@material-ui/core';

const ButtonComponent = (props) =>  {
    const { text } = props;

    return (
        <Button className='Button'>
            <span className='Text'>
                {text}
            </span>
        </Button>
    )
}

ButtonComponent.propTypes = {
    text: PropTypes.string
}

ButtonComponent.defaultProps = {
    text: ''
}

export default ButtonComponent;
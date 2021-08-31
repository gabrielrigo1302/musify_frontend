import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles'
import { Button } from '@material-ui/core';

const ButtonComponent = (componentProps) =>  {
    const { text, buttonCustomStyle, fontCustomStyle } = componentProps;
    const styles = useStyles({
        buttonCustomStyle,
        fontCustomStyle
    });

    return (
        <Button className = {styles.button}>
            <span className = {styles.text}>
                {text}
            </span>
        </Button>
    )
}

ButtonComponent.propTypes = {
    text: PropTypes.string,
    fontCustomStyle: PropTypes.object,
    buttonCustomStyle: PropTypes.object, 
}

ButtonComponent.defaultProps = {
    text: '',
    buttonCustomStyle: null,
    fontCustomStyle: null
}

export default ButtonComponent;
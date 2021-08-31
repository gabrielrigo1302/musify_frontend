import React from 'react';
import PropTypes from 'prop-types'
import useStyles from './styles';

const Form = (componentProps) =>  {
    const { 
        content, 
        formCustomStyle
    } = componentProps;

    const styles = useStyles({
        formCustomStyle
    });

    return (
        <div className = {styles.form}>
            {content}
        </div>
    )
}

Form.propTypes = {
    content: PropTypes.any,
    formCustomStyle: PropTypes.object
}

Form.defaultProps = {
    content: null,
    formCustomStyle: null
}

export default Form;
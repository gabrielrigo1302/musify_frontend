import React from 'react';
import PropTypes from 'prop-types'
import './Form.scss';

const Form = (props) =>  {
    const { content } = props;

    return (
        <div className='Form'>
            {content}
        </div>
    )
}

Form.propTypes = {
    content: PropTypes.any
}

Form.defaultProps = {
    content: null
}

export default Form;
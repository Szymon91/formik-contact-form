import React from 'react';
import './ErrorMessageForm.css'

const ErrorMessageForm = props => {
    return ( 
        <div className='error'>
            {props.children}
        </div>
     );
}
 
export default ErrorMessageForm;
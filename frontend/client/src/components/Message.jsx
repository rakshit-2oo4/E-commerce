import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
    return <Alert variant={variant} className="rounded-lg shadow-md">{children}</Alert>;
};

Message.defaultProps = {
    variant: 'info',
};

export default Message;
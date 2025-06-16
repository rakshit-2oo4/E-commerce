import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <div className="d-flex justify-content-center my-5">
            <Spinner
                animation="border"
                role="status"
                style={{
                    width: '100px',
                    height: '100px',
                    margin: 'auto',
                    display: 'block',
                }}
                className="text-primary"
            >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
};

export default Loader;
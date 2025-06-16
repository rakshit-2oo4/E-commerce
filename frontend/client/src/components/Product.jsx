import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded-lg shadow-sm h-100 d-flex flex-column">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>

            <Card.Body className="d-flex flex-column">
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div" className="text-center text-primary fw-bold">
                        {product.name}
                    </Card.Title>
                </Link>

                <Card.Text as="h3" className="text-center text-success mt-auto">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
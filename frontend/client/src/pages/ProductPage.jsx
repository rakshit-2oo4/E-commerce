import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { fetchProductDetails } from '../redux/slices/productSlice';
import Message from '../components/Message';
import Loader from '../components/Loader';

const ProductPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProductDetails(id));
    }, [dispatch, id]);

    return (
        <>
            <Link className="btn btn-light my-3 rounded-md shadow-sm" to="/">
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : product ? (
                <Row className="mt-4">
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid className="rounded-lg shadow-md" />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush" className="border rounded-lg shadow-sm">
                            <ListGroup.Item>
                                <h3 className="mb-0 text-primary">{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Price:</strong> <span className="text-success fs-5">${product.price}</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Description:</strong> <br /> {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card className="rounded-lg shadow-sm">
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong className="text-success">${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product.countInStock > 0
                                                ? 'In Stock'
                                                : 'Out Of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button
                                        className="btn btn-primary w-100 rounded-md shadow-sm"
                                        type="button"
                                        disabled={product.countInStock === 0}
                                    >
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            ) : (
                <Message variant="info">Product not found.</Message>
            )}
        </>
    );
};

export default ProductPage;
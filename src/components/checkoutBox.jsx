import { MDBContainer } from 'mdb-react-ui-kit';
import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import './checkoutBox.css'
import Counter from './counter';

class CheckoutBox extends Component {

    render() { 
        return ( 
            <MDBContainer>
                <div className="checkout-box">
                    <Row className="box-grid">
                        <Col className="image_col">
                            <div className="image">
                                <img src="photo1.png" alt="product photo"/>
                            </div>
                        </Col>

                        <Col className="text_col">
                            <p className="product_name">
                                Vintage Backbag
                            </p>
                            <div className="prices">
                                <small className="new_price">
                                        $54.99
                                </small>
                                <small className="old_price">
                                    $94.99
                                </small>
                            </div>
                            <Counter />
                        </Col>
                    </Row>
                </div>
            </MDBContainer>
         );
    }
}
 
export default CheckoutBox;
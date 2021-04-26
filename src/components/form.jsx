import React, { Component } from 'react'
import Country from './Country'
import { FaUserCircle, FaPhoneAlt, FaHome, FaCity } from 'react-icons/fa';
import { MdEmail, MdMarkunreadMailbox } from 'react-icons/md'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { Button, InputGroup, FormControl, FormCheck, Col, Row } from 'react-bootstrap'
import './form.css'
// import { MDBCardBody } from 'mdb-react-ui-kit';
class Form extends Component {
    constructor() {
        super()
        this.state = {
            email : '',
            phone : '',
            fullname : 'Rodney Cotten',
            address : '',
            city : '',
            postalcode : '',
            saveInfo : ''
        }

        this.onInputchange = this.onInputchange.bind(this)
        this.phoneChange = this.phoneChange.bind(this)
        this.addressChange = this.addressChange.bind(this)
        this.cityChange = this.cityChange.bind(this)
        this.postalChange = this.postalChange.bind(this) 
    }

    onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    phoneChange(event) {
        this.setState({
            phone : event.target.value
        })
    }

    addressChange(event) {
        this.setState({
            address : event.target.value
        })
    }

    cityChange(event) {
        this.setState({
            city : event.target.value
        })
    }

    postalChange(event) {
        this.setState({
            postalcode : event.target.value
        })
    }

    // onSubmitForm() {
    //     alert(this.state)
    // }

    render() { 
        return ( 
            <MDBContainer>
                <MDBRow>
                    <MDBCol sm="12" xs="12" md="12">
                        <MDBCard>
                            <MDBCardBody>
                                <form action=" ">
                                    <div className="section_title">
                                        <h3>Contact Information</h3>
                                    </div>

                                    <div className="form-group">
                                        <div className="label">
                                            <label htmlFor="text">Email</label>
                                        </div>
                                        <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm"><MdEmail /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                            <FormControl type="text"
                                                name="email"
                                                placeholder="Email your email.."
                                                value={this.state.email}
                                                onChange={this.onInputchange}/>
                                        </InputGroup>
                                    </div>
                                    
                                    <div className="form-group">
                                        <div className="label">
                                            <label htmlFor="text">Phone</label>
                                        </div>
                                        <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm"><FaPhoneAlt /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                            <FormControl type="number" 
                                                placeholder="Email your phone"
                                                value={this.state.phone}
                                                onChange={this.phoneChange}/>
                                        </InputGroup>
                                    </div>
                                    
                                    
                                    <div className="section_title mb">
                                        <h3>Shipping Address</h3>
                                    </div>

                                    <div className="form-group">
                                        <div className="label">
                                            <label htmlFor="text">Full name</label>
                                        </div>
                                        <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm"><FaUserCircle /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                            <FormControl type="text" 
                                                value={this.state.fullname}
                                                onChange={this.onInputchange}/>
                                        </InputGroup>
                                    </div>
                                    
                                    <div className="form-group">
                                        <div className="label">
                                            <label htmlFor="address">Address</label>
                                        </div>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm"><FaHome /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl type="text" 
                                                placeholder="Your address"
                                                value={this.state.address}
                                                onChange={this.addressChange}/>
                                        </InputGroup>
                                    </div>

                                    <div className="form-group">
                                        <div className="label">
                                            <label htmlFor="address">City</label>
                                        </div>
                                        <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm"><FaCity /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl type="text" 
                                                placeholder="Your city"
                                                value={this.state.city}
                                                onChange={this.cityChange}/>
                                        </InputGroup>
                                    </div>

                                    <Row >
                                        <Col>
                                            <div className="form-group">
                                                <div className="label">
                                                    <label htmlFor="address">Country</label>
                                                </div>
                                                <Country />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-group">
                                                <label htmlFor="postal code">Postal code</label>
                                                <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroup-sizing-sm"><MdMarkunreadMailbox /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                    <FormControl type="text" 
                                                        
                                                        placeholder="Your postal code"
                                                        value={this.state.postalcode}
                                                        onChange={this.postalChange}/>
                                                </InputGroup>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="form-group check-b">
                                        <InputGroup className="mb-3">
                                            <FormCheck
                                                name="saveInfo"
                                                type="checkbox"
                                                checked={this.state.saveInfo}
                                                onChange={this.onInputchange} />
                                                <span>
                                                    Save this information for next time
                                                </span> 
                                        </InputGroup>
                                    </div>
                                    <div>
                                        <Button onClick={this.onSubmitForm} className="btn btn-primary">Continue</Button>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
         );
    }
}
 
export default Form;
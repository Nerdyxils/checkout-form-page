import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/form';
import CheckoutBox from './components/checkoutBox';
import { Col, Container, Row } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title_head">
          Checkout
        </h1>
       <Container>
         <Row>
            <Col xs={12} sm={12} md={6} s>
              <Form />
            </Col>

            <Col xs={12} sm={12} md={6} >
              <CheckoutBox />
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
}

export default App;

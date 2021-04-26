import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as BrowserRouter } from 'react-router-dom'
import Form from './components/form';
import CheckoutBox from './components/checkoutBox';
import { Col, Container, Row } from 'react-bootstrap';



function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Container>
       <h1 className="title_head">
          Checkout
        </h1>
         <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} className="form">
              <Form />
            </Col>

            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}  className="form-box">
              <CheckoutBox />
            </Col>
          </Row>
        </Container>

      <div className="cc">
        <p>created by username - devChallenges.io</p>
      </div>
    </BrowserRouter>
  );
}

export default App;

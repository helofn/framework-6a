import Footer from "./modulos/footer";
import Navbar from "./modulos/navbar";
    import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Index() {
  return <div>
    <Navbar />
    Bem Vindos
    <Container>
      <Row>
        <Col className= "bg-dark1"> of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    <Footer />

  </div>;
}
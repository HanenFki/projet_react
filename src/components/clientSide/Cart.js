import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Plus, Dash, Trash } from 'react-bootstrap-icons';
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
  const { cartDetails, removeItem, clearCart, totalPrice, cartCount, incrementItem, decrementItem } = useShoppingCart();
  const navigate = useNavigate();
  const [payment, setPayment] = React.useState(false);

  const onToken = (token) => {
    console.log(token);
    clearCart();
    navigate('/');
  };

  const commander = async () => {
    setPayment(true);
  };

  const formatPrice = (price) => {
    console.log('Type de prix:', typeof price);
  
    if (typeof price === 'number') {
      const formattedPrice = Number(price).toFixed(3);
      console.log('Prix formaté:', formattedPrice);
      return formattedPrice;
    } else {
      console.log('Prix non valide:', price);
      return 'N/A';
    }
  };
  
  

  const more = () => {
    navigate('/');
  };

  const clear = () => {
    clearCart();
  };

  const imprimer = () => {
    navigate('/pdfCart');
  };

  if (cartCount === 0) return <h1>Cart Empty</h1>;

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={8}>
          {payment ? (
            <StripeCheckout
              token={onToken}
              stripeKey="pk_test_51ODlPcDQoRgqMOAARg0eotfi9vQwTjzkmskUxz3Y7ZzO5kr81qakHmUfczOmTB3eM6MzBmqtno7RqRyp9ReXq21z00u2hYwRXf"
              amount={totalPrice * 100}
              currency="USD"
            />
          ) : null}
          {cartDetails &&
            Object.values(cartDetails).map((item) => (
              <Row key={item.id} className="mb-3 p-3 border rounded">
                <Col xs={3}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fluid
                    rounded
                    style={{ maxHeight: '100px' }}
                  />
                </Col>
                <Col xs={9}>
                  <h5>{item.title}</h5>
                  <p>Prix: {formatPrice(item.price)} TND</p>
                  <p>Qté: {item.quantity}</p>
                  <div>
                    <Button
                      variant="success"
                      className="me-2"
                      onClick={() => {
                        if (item.quantity < item.qtestock) {
                          incrementItem(item.id);
                        } else {
                          alert('Quantité stock indisponible');
                        }
                      }}
                    >
                      <Plus />
                    </Button>
                    {item.quantity > 1 && (
                      <Button
                        variant="warning"
                        className="me-2"
                        onClick={() => decrementItem(item.id)}
                      >
                        <Dash />
                      </Button>
                    )}
                    {item.quantity === 1 && (
                      <Button variant="danger" onClick={() => removeItem(item.id)}>
                        <Trash />
                      </Button>
                    )}
                  </div>
                </Col>
              </Row>
            ))}
        </Col>
        <Col xs={4}>
          <Button variant="outline-danger" onClick={more} className="mb-3">
            Ajouter des articles
          </Button>
          <div className="mb-3">
            <p>Total Articles: {cartCount}</p>
            <p>Total Paiement: {totalPrice} TND</p>
          </div>
          <hr />
          <div className="d-grid gap-2">
            <Button variant="warning" onClick={commander}>
              Commander
            </Button>
            <Button variant="danger" onClick={clear}>
              Annuler
            </Button>
            <Button variant="info" onClick={imprimer}>
              Imprimer PDF
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;

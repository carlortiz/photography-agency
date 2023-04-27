import Card from 'react-bootstrap/Card';

function UserCard(props) {
    return (
      <Card style={{ width: '23rem', padding: '25px'}}>
        <Card.Img variant="top" src={ props.avatar } />
        <Card.Body>
          <Card.Title>{ props.first_name } { props.last_name }</Card.Title>
          <Card.Text>Contact: { props.email}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default UserCard;

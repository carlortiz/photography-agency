import { Card, Col, Container, Row } from 'react-bootstrap';

function UserDisplay() {
  return (
    <div>
		<Container>
			<Row>
				<Col>
					<Card>
					<Card.Img variant="top" src='#' />
						<Card.Body>
							<Card.Title>First Last</Card.Title>
							<Card.Text>email@email.com</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src='#' />
						<Card.Body>
							<Card.Title>First Last</Card.Title>
							<Card.Text>email@email.com</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src='#' />
						<Card.Body>
							<Card.Title>First Last</Card.Title>
							<Card.Text>email@email.com</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card>
					<Card.Img variant="top" src='#' />
						<Card.Body>
							<Card.Title>First Last</Card.Title>
							<Card.Text>email@email.com</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src='#' />
						<Card.Body>
							<Card.Title>First Last</Card.Title>
							<Card.Text>email@email.com</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src='#' />
						<Card.Body>
							<Card.Title>First Last</Card.Title>
							<Card.Text>email@email.com</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
    </div>
  );
}

export default UserDisplay;

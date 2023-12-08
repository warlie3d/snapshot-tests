import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from '../Images/pic.jpg'

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>warlie3d</Card.Title>
        <Card.Text>
         A highly dedicated and motivated software engineer and a fast learner.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;
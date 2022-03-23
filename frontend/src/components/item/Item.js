import { Carousel, Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Item({ collection })
{
	if (!collection)
	{
		return "";
	}

	return (
		<div className="card-container">
			<Row xs={1} md={2} lg={3} xl={4} className='g-4' >
				{collection.item.map((object) =>
				{
					return (
						<Col key={object.id} >
							<Card
								className='h-100' key={object.id}>
								{object.img && (
									<Card.Img
										variant='top'
										src={object.img ? object.img : ''}
										alt={object.name}
									/>
								)}
								<Card.Body>
									{object.img ? (
										''
									) : (
										<Card.Title>No Image Available</Card.Title>
									)}
									<Card.Text className='text-muted'>{object.name}</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Link to={'/items'}>
										<Button
											variant='outline-dark'>
											View Collection
										</Button>
									</Link>
								</Card.Footer>
							</Card>
						</Col>
					);
				})}
				{/* {(activeItem || error) && (
        <Detail
          objectDetail={activeItem}
          show={show}
          handleClose={handleClose}
          error={error}
        />
      )} */}
			</Row>
		</div>
	);
}

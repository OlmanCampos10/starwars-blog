import React, { useState, useContext } from "react";
import { Card, Container, CardDeck, Button, Col, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const People = props => {
	const { store, actions } = useContext(Context);
	const [searchItem, setSearch] = useState();

	return (
		<Container>
			<h1 className="text-center mt-5">PERSONAJES</h1>

			<CardDeck>
				{props.data.map((people, i) => {
					return (
						<Col className="mt-5" md={4} key={i}>
							<Card>
								<Card.Img
									variant="top"
									src="https://www.xtrafondos.com/descargar.php?id=4496&resolucion=3840x2400,1200,509"
								/>
								<Card.Body>
									<Card.Title>{people.name}</Card.Title>
									<Card.Text>
										<p>
											<strong>Gender:</strong>
											<span>{people.gender}</span>
										</p>
										<p>
											<strong>Hair-Color:</strong>
											<span>{people.hair_color}</span>
										</p>
										<p>
											<strong>Eye-Color:</strong>
											<span>{people.eye_color}</span>
										</p>
									</Card.Text>
									<ButtonToolbar
										className="justify-content-between"
										aria-label="Toolbar with Button groups">
										<Link to={`/people/${i}`}>
											<Button variant="primary">Learn More</Button>
										</Link>

										<Link onClick={() => actions.addFavorite(people.name, "people")}>
											<Button variant="outline-warning">
												<i className="far fa-heart" />
											</Button>
										</Link>
									</ButtonToolbar>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</CardDeck>
		</Container>
	);
};

People.propTypes = {
	data: PropTypes.any
};

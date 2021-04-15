import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<Link to="/characters">
					<img
						className="d-block w-100"
						src="https://images.wallpapersden.com/image/download/star-wars-the-clone-wars-4k_a25pZWaUmZqaraWkpJRobWllrWdma2U.jpg"
						width="700"
						height="830"
						alt="people"
					/>
				</Link>
				<Carousel.Caption>
					<h3>Personajes</h3>
					<p>Elige tus personajes Favoritos</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<Link to="/planetsView">
					<img
						className="d-block w-100"
						src="https://www.teahub.io/photos/full/55-555266_star-wars-poster-4k.jpg"
						width="700"
						height="830"
						alt="planets"
					/>
				</Link>
				<Carousel.Caption>
					<h3>Planetas</h3>
					<p>Elige tus planetas Favoritos</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<Link to="/planetsView">
					<img
						className="d-block w-100"
						src="https://www.teahub.io/photos/full/55-555266_star-wars-poster-4k.jpg"
						width="700"
						height="830"
						alt="planets"
					/>
				</Link>
				<Carousel.Caption>
					<h3>Vehiculos</h3>
					<p>Elige tus Vehiculos Favoritos</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

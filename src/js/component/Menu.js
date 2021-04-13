import React, { useContext } from "react";
import { Dropdown, Container, DropdownButton, Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Menu = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar bg="dark">
			<Link to="/">
				<Navbar.Brand href="#home">
					<img
						src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png"
						width="100"
						height="80"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
			</Link>

			<Navbar.Collapse className="justify-content-end">
				<DropdownButton id="dropdown-basic-button" variant="dark" title={"Favoritos " + store.favorites.length}>
					{store.favorites.length == 0 ? (
						<Dropdown.Item>Vacio</Dropdown.Item>
					) : (
						store.favorites.map((favorite, i) => {
							return (
								<Dropdown.Item eventKey={i} key={i} onClick={() => actions.deleteFavorite(i)}>
									{favorite.type == "people" ? (
										<div>
											<i className="fas fa-id-card">
												&nbsp;
												{favorite.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</div>
									) : (
										<div>
											<i className="fas fa-globe-americas">
												&nbsp;
												{favorite.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</div>
									)}
								</Dropdown.Item>
							);
						})
					)}
				</DropdownButton>
			</Navbar.Collapse>
		</Navbar>
	);
};

import React, { Component } from 'react'
import { 
	Navbar,
	Container,
	Nav,
	Form,
	FormControl,
	Button 
} from 'react-bootstrap';

import logo from '../logo.svg';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contacts from "../pages/Contacts";

export default class Header extends Component {
	render() {
		return (
			<>
				<Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="/">
							<img
								src={logo}
								height="30"
								width="30"
								className="d-inline-block align-top"
								alt="logo"
							/>
						</Navbar.Brand>
						<NavbarToggle aria-controls="responsive-navbar-nav" />
						<NavbarCollapse id="responsive-navbar-nav">
							<Nav className="mr-auto pt-2 mb-2 pt-md-0 mb-md-0">
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/about">About us</Nav.Link>
								<Nav.Link href="/blog">Blog</Nav.Link>
								<Nav.Link href="/contacts">Contacts</Nav.Link>
							</Nav>
							<Form inline>
								<FormControl
									type="text"
									placeholder="Search"
									className="mb-2 mb-md-0 mr-md-2"
								/>
								<Button variant="outline-light">Search</Button>
							</Form>
						</NavbarCollapse>

					</Container>
				</Navbar>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/blog" component={Blog} />
						<Route exact path="/contacts" component={Contacts} />
					</Switch>
				</Router>
			</>
		)
	}
}

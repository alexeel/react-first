import React, { Component } from 'react'
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap'
import logo from './logo.svg'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'

export default class header extends Component {
	render() {
		return (
			<Navbar>
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
						<Nav className="mr-auto">
							<NavLink href="/">Home</NavLink>
							<NavLink href="/">Home</NavLink>
							<NavLink href="/">Home</NavLink>
							<NavLink href="/">Home</NavLink>
							<NavLink href="/">Home</NavLink>
						</Nav>
					</NavbarCollapse>

				</Container>
			</Navbar>
				)
			}
		}

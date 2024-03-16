"use client"

import { Navbar, Nav, Container } from 'react-bootstrap';
import { observer } from 'mobx-react';
import userStore from '../../stores/userStore';

function NavBar() {
    console.log(userStore)
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">MySite</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {userStore.username === "" ? (
                            // If there's no username, show Login and Sign up links
                            <>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/registration">Sign up</Nav.Link>
                            </>
                        ) : (
                            // If there is a username, show the username
                            <p>{userStore.username}</p>
                        )}
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default observer(NavBar);
"use client"

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { observer } from 'mobx-react';
import userStore from '../../stores/userStore';
import { useRouter } from "next/navigation";

function NavBar() {
    console.log(userStore)

    const router = useRouter();
    const handleLogout = () => {
        userStore.logout();
        // Potentially redirect the user to the home page or login page
        // This depends on your routing setup; for example, using window.location.href or history.push if you're using react-router
      
        router.push('/login'); 
    };


    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">MySite</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {userStore.authenticated ? (
                            // When the user is authenticated, show the username and a logout option
                            <>
                                <Nav.Link href="/profile">{userStore.username}</Nav.Link>
                                <Nav.Link as="button" onClick={handleLogout}>Logout</Nav.Link>
                            </>
                        ) : (
                            // If not authenticated, show Login and Sign up links
                            <>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/registration">Sign up</Nav.Link>
                            </>
                        )}
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default observer(NavBar);
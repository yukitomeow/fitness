import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

const FormCard = ({ children, isLogin }) => {
    return (
        <Card>
            <Card.Header>
                <div className="d-flex justify-content-between">
                    {isLogin ? (
                        <>
                            <Link href="/registration">
                                Sign Up
                            </Link>
                            <span>Login</span>
                        </>
                    ) : (
                        <>
                            <span>Sign Up</span>
                            <Link href="/login">
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </Card.Header>
            <Card.Body>{children}</Card.Body>
        </Card>
    );
};

export default FormCard;


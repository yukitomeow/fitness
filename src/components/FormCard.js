import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

const FormCard = ({ title, linkPath, linkText, children }) => {
    return (
        <Card>
            <Card.Header>
                {title}
                {linkPath && linkText && (
                    <Link href={linkPath}>
                        <a className="float-right">{linkText}</a>
                    </Link>
                )}
            </Card.Header>
            <Card.Body>{children}</Card.Body>
        </Card>
    );
};

export default FormCard;


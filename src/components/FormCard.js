import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

const FormCard = ({ title, linkPath, linkText, children }) => {
    return (
        <Card>
            <Card.Header>
                {title}
                {linkPath && linkText && (
                    <Link href={linkPath} className="float-right">
                      {linkText}
                    </Link>
                )}
            </Card.Header>
            <Card.Body>{children}</Card.Body>
        </Card>
    );
};

export default FormCard;


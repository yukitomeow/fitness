"use client"

import React from 'react';
import form from "./RegistrationFormManager";
import { observer } from "mobx-react";
import { Register } from "../api";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCard from '../src/components/FormCard';
import { useRouter } from "next/navigation";

const RegistrationForm = observer(() => {
    const router = useRouter();
    const onSuccess = (form) => {

        const values = form.values();
        Register(values.username, values.email, values.password, values.passwordConfirm).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        console.log('onSuccess');

        form.clear()
    }

    const onError = (form) => {
        console.log('onError')
        console.log(form)
    }

    const handleSubmit = (e) => {
        console.log("handleSubmit called")
        console.log(e)
        e.preventDefault()
        form.onSubmit(e, { onSuccess: onSuccess, onError: onError })
    }

    return (

        <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Row>
                <Col md={6} lg={4} style={{width:"100%"}}>
                    <FormCard
                        isLogin={false}
                    > 

                        <Form noValidate onSubmit={handleSubmit} action="#" method="POST">
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor={form.$('username').id}>
                                    {form.$('username').label}
                                </Form.Label>
                                <Form.Control {...form.$('username').bind()} />
                                <p>{form.$('username').error}</p>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor={form.$('email').id}>
                                    {form.$('email').label}
                                </Form.Label>
                                <Form.Control {...form.$('email').bind()} />
                                <p>{form.$('email').error}</p>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor={form.$('password').id}>
                                    {form.$('password').label}
                                </Form.Label>
                                <Form.Control {...form.$('password').bind()} />
                                <p>{form.$('password').error}</p>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor={form.$('passwordConfirm').id}>
                                    {form.$('passwordConfirm').label}
                                </Form.Label>
                                <Form.Control {...form.$('passwordConfirm').bind()} />
                                <p>{form.$('passwordConfirm').error}</p>
                            </Form.Group>

                            <Button type="submit" onClick={handleSubmit}>Submit</Button>
                            {/* <Button type="button" onClick={form.onClear}>Clear</Button>
                            <Button type="button" onClick={form.onReset}>Reset</Button> */}
                        </Form>
                    </FormCard>
                </Col>
            </Row>
        </Container>
        // <form noValidate onSubmit={handleSubmit} action="#" method="POST">
        //     <div>
        //         <label htmlFor={form.$('username').id}>
        //             {form.$('username').label}
        //         </label>
        //         <input {...form.$('username').bind()} />
        //         <p>{form.$('username').error}</p>
        //     </div>

        //     <div>
        //         <label htmlFor={form.$('email').id}>
        //             {form.$('email').label}
        //         </label>
        //         <input {...form.$('email').bind()} />
        //         <p>{form.$('email').error}</p>
        //     </div>

        //     <div>
        //         <label htmlFor={form.$('password').id}>
        //             {form.$('password').label}
        //         </label>
        //         <input {...form.$('password').bind()} />
        //         <p>{form.$('password').error}</p>
        //     </div>

        //     <div>
        //         <label htmlFor={form.$('passwordConfirm').id}>
        //             {form.$('passwordConfirm').label}
        //         </label>
        //         <input {...form.$('passwordConfirm').bind()} />
        //         <p>{form.$('passwordConfirm').error}</p>
        //     </div>

        //     <button type="submit" onClick={handleSubmit}>Submit</button>
        //     <button type="button" onClick={form.onClear}>Clear</button>
        //     <button type="button" onClick={form.onReset}>Reset</button>

        //     <p>{form.error}</p>
        // </form>
    )
});

export default RegistrationForm;
"use client"

import React from 'react';
import form from "./LoginFormManager";
import { observer } from "mobx-react";
import { Login } from "../../api"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCard from '../../src/components/FormCard'; 
import { useRouter } from "next/navigation";
import { saveToStorage } from '@/utils/localStorage';
import { GetUserInfo } from "../../api";
import userStore from "../../stores/userStore";
//import catStore from '../stores/catStore';


const LoginForm = observer(() => {
    const router = useRouter();
    const onSuccess = async (form) => {

        const values = form.values();
        try {
            const response = await Login(values.username, values.email, values.password);
            console.log(response)
            saveToStorage('accessToken', response.key);
            const user = await GetUserInfo()
            console.log("user is ", user)
            userStore.authenticate(user)
            router.push('/'); 
    
        } catch (error) {
            console.log(error)
        }
            //Login(values.username, values.email, values.password).then(response => {
            //     console.log(response);//login token
            //     saveToStorage('accessToken', response.key);
            //     GetUserInfo()
            // }).then(response=>{
            //     console.log("Authentication complete",response)
            //     router.push('/'); 
            // })     
            
            // .catch(error => {
            //     console.log(error);
            // });
            // console.log('onSuccess');

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
                isLogin={true}
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

                            <Button type="submit" onClick={handleSubmit}>Submit</Button>
                            {/* <Button type="button" onClick={form.onClear}>Clear</Button>
                            <Button type="button" onClick={form.onReset}>Reset</Button> */}
                            
                        </Form>
                    </FormCard>
                </Col>
            </Row>
        </Container>


)});

export default LoginForm;
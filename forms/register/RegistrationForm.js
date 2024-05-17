"use client"

import React,  {useState} from 'react';
import form from "./RegistrationFormManager";
import { observer } from "mobx-react";
import { Register, Login, GetUserInfo } from "../../api";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCard from '../../src/components/FormCard';
import { useRouter } from "next/navigation";
import { saveToStorage } from '@/utils/localStorage';
import userStore from '../../stores/userStore';

const RegistrationForm = observer(() => {
    const [loading, setLoading]=useState(false);
    const router = useRouter();
    // const onSuccess = async (form) => {
    //     const { username, email, password1, password2 } = form.values();
    //     setLoading(true);

    //     try {
    //         const registerResponse = await Register(username, email, password1, password2);
    //         const loginResponse = await Login(email, password1);
    //         const userData = await GetUser(loginResponse.data.key);
    //         UserStore.authenticate(userData);
    //         setLoading(false);
    //         form.clear();
    //         navigate('/');
    //     } catch (error) {
    //         console.log('caught error')
    //         console.log(error);
    //         setLoading(false);
    //         if (error.response.data['username']) {
    //             form.select('username').invalidate(error.response.data['username'][0]);
    //         } else if (error.response.data['email']) {
    //             form.select('email').invalidate(error.response.data['email'][0]);
    //         } else if (error.response.data['password1']) {
    //             form.select('password1').invalidate(error.response.data['password1'][0]);
    //         } else if (error.response.data['password2']) {
    //             form.select('password2').invalidate(error.response.data['password2'][0]);
    //         } else if (error.response.data['non_field_errors']) {
    //             form.invalidate(error.response.data['non_field_errors'][0]);
    //             ToastError(error.response.data['non_field_errors'][0])
    //         } else {
    //             ToastError("An unknown error occured.")
    //         }
    //     }
    // }
    const onSuccess = async (form) => {

        const { username, email, password, passwordConfirm } = form.values();
        try{
            const registerResponse = await Register(username, email,password, passwordConfirm)
            console.log("registerResponse is ", registerResponse)
            const loginResponse = await Login(username, email, password);
            saveToStorage('accessToken', loginResponse.key);
            const userData = await GetUserInfo();
            userStore.authenticate(userData)
            form.clear();
            router.push("/")
            
        } catch (error){
            console.log(error);
            if (error.response.data.username) {
                form.invalidate(error.response.data.username[0])
            }
        }
        // Register(username, email,password, passwordConfirm).then(response => {
        //     console.log(response);
        // }).catch(error => {
        //     console.log(error);
        //     if (error.response.data.username){
        //         form.invalidate(error.response.data.username[0]) 
        //     }
        // });
        console.log('onSuccess');

        // form.clear()
        //make a pop up
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
                            <p>{form.error}</p>
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
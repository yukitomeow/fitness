"use client"

import React from 'react';
import form from "./LoginFormManager";
import { observer } from "mobx-react";
import { Login } from "../api"

const LoginForm = observer(() => {
    const onSuccess = (form) => {

        const values = form.values();
        Login(values.username, values.email, values.password).then(response => {
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
        <form noValidate onSubmit={handleSubmit} action="#" method="POST">
            <div>
                <label htmlFor={form.$('username').id}>
                    {form.$('username').label}
                </label>
                <input {...form.$('username').bind()} />
                <p>{form.$('username').error}</p>
            </div>

            <div>
                <label htmlFor={form.$('email').id}>
                    {form.$('email').label}
                </label>
                <input {...form.$('email').bind()} />
                <p>{form.$('email').error}</p>
            </div>

            <div>
                <label htmlFor={form.$('password').id}>
                    {form.$('password').label}
                </label>
                <input {...form.$('password').bind()} />
                <p>{form.$('password').error}</p>
            </div>

        
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button type="button" onClick={form.onClear}>Clear</button>
            <button type="button" onClick={form.onReset}>Reset</button>

            <p>{form.error}</p>
        </form>
    )
});

export default LoginForm;
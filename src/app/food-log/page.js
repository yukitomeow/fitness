"use client"

import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { CreateMeal } from "../../../api";
import MealForm from "../../../forms/meals/MealForm";
import MealFormManager from "../../../forms/meals/MealFormManager"


const FoodLogPage=()=>{

    const createMeal = async () => {
        const user =1
        const meal_type= "Lunch"
        const hungry_when_eating=true
        const stop_eating_not_hungry=true
        const foods=[
            {
                "name": "Panda cookie",
                "nutrition": {
                    
                    "calories": 30,
                    "protein": "100.00",
                    "carbohydrates": "0.00",
                    "fats": "0.00"
                }
            }
        ]

        const response = await CreateMeal(
            user,
            meal_type,
            hungry_when_eating,
            stop_eating_not_hungry,
            foods
        );
        return response
    }

    return (
        <section className="vh-100 d-flex justify-content-center align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}> 
                        <MealForm form={MealFormManager} />
                    </Col>
                </Row>
            </Container>
        </section>
        )


}

export default FoodLogPage;
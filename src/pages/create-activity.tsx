import React from "react";
import {Form,Row,Col,Typography, Input, Button} from "antd";
import { FormActivity } from "../components/form-activity";


type CreateActivityProps = {
    goBackAction:any
}

const CreateActivity: React.FC<CreateActivityProps> = (props)=>{

    return <Row>
       
        <Col sm={2} xs={2} md={4} >

        </Col>
        <Col sm={20} xs={20} md={10} >
        <Typography.Title level={4} >Registrar nueva actividad</Typography.Title>

          <FormActivity  goBack={props.goBackAction}  />

        </Col>
        <Col sm={2} xs={2} md={4} >
            

        </Col>

    </Row>


}

export {
    CreateActivity
}
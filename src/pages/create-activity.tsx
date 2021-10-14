import React from "react";
import {Form,Row,Col,Typography, Input, Button} from "antd";
import { FormActivity } from "../components/form-activity";
import { ActivityInterface } from "../utils/interfaces/activity";


type CreateActivityProps = {
    goBackAction:any,
    addActivity:any
}

const CreateActivity: React.FC<CreateActivityProps> = (props)=>{

    /***Some validations extra */
    const getResult = (acitivty:ActivityInterface)=>{
            acitivty.status = 'PENDIENTE';
            props.addActivity(acitivty);

    }

    return <Row>
       
        <Col sm={2} xs={2} md={4} >

        </Col>
        <Col sm={20} xs={20} md={10} >
        <Typography.Title level={4} >Registrar nueva actividad</Typography.Title>

          <FormActivity  
          onSendResult={getResult}
          typeAction="registro"
          goBack={props.goBackAction}  />

        </Col>
        <Col sm={2} xs={2} md={4} >
            

        </Col>

    </Row>


}

export {
    CreateActivity
}
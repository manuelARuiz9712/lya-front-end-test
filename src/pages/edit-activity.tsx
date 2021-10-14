import React from "react";
import {Form,Row,Col,Typography, Input, Button} from "antd";
import { FormActivity } from "../components/form-activity";
import { ActivityInterface } from "../utils/interfaces/activity";


type EditActivityProps = {
    goBackAction:any,
    onEditActivity:any,
    defaultData:ActivityInterface | any
}

const EditActivity: React.FC<EditActivityProps> = (props)=>{

    /***Some validations extra */
    const getResult = (acitivty:ActivityInterface)=>{
            //acitivty.status = 'PENDIENTE';
            props.onEditActivity(acitivty);

    }

    

    return <Row>
       
        <Col sm={2} xs={2} md={4} >

        </Col>
        <Col sm={20} xs={20} md={10} >
        <Typography.Title level={4} >Editar actividad</Typography.Title>

          <FormActivity  
          defaultData={props.defaultData}
          onSendResult={getResult}
          typeAction="edition"
          goBack={props.goBackAction}  />

        </Col>
        <Col sm={2} xs={2} md={4} >
            

        </Col>

    </Row>


}

export {
    EditActivity
}
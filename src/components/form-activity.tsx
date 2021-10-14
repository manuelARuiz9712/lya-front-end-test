import React, { useState } from "react";
import {Form,Row,Col, Input, Button, Divider,Space, DatePicker,Modal} from "antd";
import moment from "moment";
import { DateFormatString } from "../utils/constants";
import { ActivityInterface } from "../utils/interfaces/activity";
import { v4 as uuidv4 } from 'uuid';

type FormActivityProps  ={
    goBack:any,
    onSendResult:any,
    defaultData?:ActivityInterface,
    typeAction: 'registro'| 'edition'
   
}

const FormActivity: React.FC<FormActivityProps> = (props)=>{

    const [form] = Form.useForm();
    const [date,setDate] = useState(moment().format(DateFormatString));


    React.useEffect(()=>{

        if (props.defaultData){
            
            //setDate(props.defaultData.date || '');
        }

    },[props.defaultData]);


    const onSendForm = (values: ActivityInterface) => {
        values.date = date;
        values.key= uuidv4();
        
        props.onSendResult(values);
     
       
    };
    const onChangeDate = (date:any,dateFormat:string)=>{
        setDate(dateFormat);
    }
    const disabledDate = (current:any) => {
        // Can not select days before today and today
        return current && current < moment().add(-1,"day");
    }


    return (
        <Form
            initialValues={props.defaultData}
            form={form}
            title="Crear nueva actividad"
            layout="vertical"
            onFinish={onSendForm}
        >
            <Form.Item
                label='Nombre de la actividad'
                name='name'
                
                rules={[{
                    required: true, message: "Este campo es requerido"
                }]}
            >
                <Input
                    disabled={props.typeAction=== "edition"}
                    type="text"
                    
                     />
            </Form.Item>
            <Form.Item
                label='Descripcion'
                name='descripcion'
                rules={[{
                    required: true, message: "Este campo es requerido"
                }]}
            >
                <Input type="text" 

                />
            </Form.Item>
           
            <Form.Item
            label='Fecha'
            name='date' 
            >
            <DatePicker 
            picker="date"
            disabled={props.typeAction=== "edition"}
            value={moment(date)}
            disabledDate={disabledDate}
            onChange={onChangeDate}

            style={{ width: '50%' }} />

            </Form.Item>

            <Form.Item wrapperCol={{ span: 16 }}  >
                <Space size={5} >
                    <Button onClick={props.goBack} type="ghost" htmlType="button">
                        Regresar
                    </Button>
                    <Button type="primary" htmlType="submit"  >
                        {
                            props.typeAction === "edition"?
                            'Editar actividad':'Crear actividad'
                        }
                        
                    </Button>
                </Space>


            </Form.Item>



        </Form>
    )
}
export {
    FormActivity
}
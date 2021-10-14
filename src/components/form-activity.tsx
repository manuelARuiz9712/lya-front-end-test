import React from "react";
import {Form,Row,Col, Input, Button, Divider,Space} from "antd";


type FormActivityProps  ={
    goBack:any
}

const FormActivity: React.FC<FormActivityProps> = (props)=>{

    return (
        <Form
        title="Crear nueva actividad"
        layout="vertical"
        >
            <Form.Item 
            label='Nombre de la actividad'
            rules={[{
                required:true,message:"Este campo es requerido"
            }]}
            >
                <Input 
                    type="text" 
                    required />
            </Form.Item>
            <Form.Item 
            label='Descripcion'
            rules={[{
                required:true,message:"Este campo es requerido"
            }]}
            >
                <Input type="text" required
                
                />
            </Form.Item>
            <Form.Item label='Fecha' >
                    <Input type="text" required />
            </Form.Item>
            <Form.Item  wrapperCol={{  span: 16,offset:15 }}  >
              <Space size={10} >
              <Button onClick={props.goBack} type="ghost" htmlType="button">
                        Regresar
                </Button>
                <Button type="primary" htmlType="submit">
                        Enviar
                </Button>
              </Space>
            
               
            </Form.Item>

            

        </Form>
    )
}
export {
    FormActivity
}
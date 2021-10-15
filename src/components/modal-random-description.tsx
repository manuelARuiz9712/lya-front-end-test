import React from "react";
import { Modal,InputNumber,Form, Row, Col } from "antd";


type ModalRandomDescriptionProps = {
    isVisible:boolean,
    onGenerateAction:any,
    onCloseModal:any

}

const ModalRandomDescription:React.FC<ModalRandomDescriptionProps> =(props)=>{

    let [quantity,setQuantity] = React.useState(1);

    return (
        <Modal 
        width={400}
        visible={props.isVisible}
        title="Generar fraces aleatorias" 
        onOk={quantity > 0 ? ()=> props.onGenerateAction(quantity):()=>{}} 
        okText='Generar'
        cancelText='Cerrar ventana'
        onCancel={props.onCloseModal}
        >
               <Row>
                   <Col span={24} >
                   <Form layout="horizontal" >

                <Form.Item
                label="Dijite la cantidad a generar"
                >
                <InputNumber 
                    min={0} 
                    keyboard={false} 
                    defaultValue={quantity} 
                    onChange={value=>setQuantity(value)}
                    />
                </Form.Item>

                </Form>
                   </Col>
               </Row>
                

        </Modal>
    )

}
export {
    ModalRandomDescription
}
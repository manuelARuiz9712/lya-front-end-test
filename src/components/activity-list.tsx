import React from "react";
import {Button, notification, Table, Typography,Input} from "antd";
import { getTableColums } from "../utils/constants";
import { ActivityInterface } from "../utils/interfaces/activity";
import {Row,Col} from "antd";


type ActivityListProps = {
  dataSet:Array<ActivityInterface>,
  goToRegister:any,
  goToEdit:any,
  onCheckTodo:any,
  onSearchItem:any
};



const  AcitvityList:React.FC<ActivityListProps>= (props)=>{

    const onRealizedActivity = (object:ActivityInterface)=>{
        props.onCheckTodo(object);
        notification.open({
            message: 'Tarea realizada',
            description:
              'Su actividad sha sido marcada como realizada',
         
          });
    }
    const onEditActivity = (object:ActivityInterface)=>{
        props.goToEdit(object);
      
    }
  
    return (
        <Row>
            <Col span={24} >
                <Row>
                    <Col span={10} >

                        
                        
                        <Button
                        onClick={props.goToRegister}
                        >Agregar nueva actividad</Button>
                    </Col>
                    <Col span={10} >
                        <Input.Search onChange={(evt)=>props.onSearchItem(evt.target.value)} placeholder='Buscar por descripcion' />
                    </Col>
                </Row>

            </Col>
           
            <Col span={24} >
                <Table  
                title={()=><Typography.Title level={5} >Listado de actividades</Typography.Title>} 
                columns={getTableColums(onRealizedActivity,onEditActivity)} dataSource={props.dataSet} />
            </Col>
        </Row>

    )
}
export {
    AcitvityList
}
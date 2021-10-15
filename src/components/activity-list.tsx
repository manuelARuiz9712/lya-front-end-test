import React from "react";
import {Button, notification, Table, Typography,Input, Space} from "antd";
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
                <Row   >
                    <Col  md={7} sm={12} xs={12} >

                        <div className='panel-padding' >
                          <Space direction="horizontal" >
                            <Button
                                    onClick={props.goToRegister}
                                >
                                    Agregar nueva actividad
                                </Button>
                                <Button
                                onClick={props.goToRegister}
                                >
                                Agregar frases random
                                </Button>
                          </Space>
                        </div>
                       
                    </Col>
                    <Col  md={7} sm={12} xs={12} ></Col>
                  
                    <Col span={2}  >
                    </Col>
                    <Col md={8} sm={24} xs={24} >
                        <div className='panel-padding' >
                            <Input.Search onChange={(evt)=>props.onSearchItem(evt.target.value)} placeholder='Buscar por descripcion' />
                            
                        </div>
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
import React from "react";
import {Button, Table, Typography} from "antd";
import { TableColumns } from "../utils/constants";
import { ActivityInterface } from "../utils/interfaces/activity";
import {Row,Col} from "antd";


type ActivityListProps = {
  dataSet:Array<ActivityInterface>,
  goToView:any
};



const  AcitvityList:React.FC<ActivityListProps>= (props)=>{
  
    return (
        <Row>
            <Col span={24} >
                <Row>
                    <Col span={10} >
                        <Button
                        onClick={()=>props.goToView("create")}
                        >Agregar nueva actividad</Button>
                    </Col>
                </Row>

            </Col>
           
            <Col span={24} >
                <Table  
                title={()=><Typography.Title level={5} >Listado de actividades</Typography.Title>} 
                columns={TableColumns} dataSource={props.dataSet} />
            </Col>
        </Row>

    )
}
export {
    AcitvityList
}
import React, { useState } from "react";
import { Button,Row,Col } from 'antd';
import { ActivityInterface } from "../utils/interfaces/activity";
import { AcitvityList } from "../components/activity-list"; 
import { stateInterface } from "../utils/interfaces/state";

export const Index = ()=>{

    const [state,setState]:[stateInterface,any] = useState({
        activityes:[],
        view:"list",
        oldView:""
    });


    const goToView = (view:string)=>{

        setState({
            ...state,
            view:view,
            oldView:state.view
        });
    }







    let component ;

    if ( state.view === 'list' ){
        component = <AcitvityList dataSet={state.activityes} goToView={goToView}  />;
    }



  return (
    <div className="app-wrapper">
        <Row>

                <Col sm={2} xs={2} md={4} >
                </Col>
                <Col sm={20} md={16}   >
                   
                    {component}
                
                </Col>
                <Col sm={2} xs={2} md={4} >
                </Col>

        </Row>
       
    </div>
    )
}
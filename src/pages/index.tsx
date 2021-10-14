import React, { useState } from "react";
import { Button,Row,Col } from 'antd';
import { ActivityInterface } from "../utils/interfaces/activity";
import { AcitvityList } from "../components/activity-list"; 
import { stateInterface, Views } from "../utils/interfaces/state";
import { CreateActivity } from "./create-activity";

export const Index = ()=>{

    const [state,setState]:[stateInterface,any] = useState({
        activityes:[],
        view:Views.list,
        oldView:""
    });


    const goToView = (view:string)=>{

        setState({
            ...state,
            view:view,
            oldView:state.view
        });
       
    }
    const goBack = (view:string)=>{

        setState({
            ...state,
            view:state.oldView,
            oldView:""
        });
       
    }







    let component ;

    if ( state.view === Views.list){
        component = <AcitvityList dataSet={state.activityes} goToView={goToView}  />;
    }
    if ( state.view === Views.create ){
        component = <CreateActivity goBackAction={goBack}  />;
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
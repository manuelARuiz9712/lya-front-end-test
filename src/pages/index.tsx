import React, { useState } from "react";
import { Button,Row,Col } from 'antd';
import { ActivityInterface } from "../utils/interfaces/activity";
import { AcitvityList } from "../components/activity-list"; 
import { stateInterface, Views } from "../utils/interfaces/state";
import { CreateActivity } from "./create-activity";
import { EditActivity } from "./edit-activity";

export const Index = ()=>{

    const [state,setState]:[stateInterface,any] = useState({
        activityes:[],
        activitySelected:{},
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

    const setActivity = (activity:ActivityInterface)=>{
      
        setState({
            ...state,
            activityes:[...state.activityes,activity]
        });

    }
    const editActivity = (activity:ActivityInterface)=>{
        let newActivityes =[...state.activityes];
        let foundIndex = newActivityes.findIndex(act=>state.activitySelected.key === act.key);

        if ( foundIndex === -1 ){
            return ;
        }
        newActivityes[foundIndex].descripcion = activity.descripcion;
      
        setState({
            ...state,
            activityes:newActivityes
        });

    }



    const goToEdit = (value:ActivityInterface)=>{
        goToView(Views.edit);

    }




    let component ;

    if ( state.view === Views.list){
        component = <AcitvityList 
        dataSet={state.activityes} 
        goToView={goToView}  />;
    }
    if ( state.view === Views.create ){
        component = <CreateActivity 
        goBackAction={goBack}  
        addActivity={setActivity}  />;
    }
    if ( state.view === Views.edit ){
        component = <EditActivity 
        defaultData={state.activitySelected}  
        goBackAction={goBack}  
        onEditActivity={editActivity}  />;
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
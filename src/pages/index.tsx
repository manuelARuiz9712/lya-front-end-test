import React, { useState } from "react";
import { Row, Col } from 'antd';
import { ActivityInterface } from "../utils/interfaces/activity";
import { AcitvityList } from "../components/activity-list";
import { stateInterface, Views } from "../utils/interfaces/state";
import { CreateActivity } from "./create-activity";
import { EditActivity } from "./edit-activity";
import moment from "moment";
import { ModalRandomDescription } from "../components/modal-random-description";
import { getRamdomFactsWithLimits } from "../network/cats";

export const Index = () => {

    const [state, setState]: [stateInterface, any] = React.useState({
        dataSetactivityes: [],
        activityes: [],

    });
    const [activitySelected, setActivitySelected]: [any, any] = React.useState(null);
    const [viewNavigation, setViewNavigation] = React.useState({
        view: "list",
        oldView: ""
    });
    const [modalRandomVisible, setModalRandomVisible] = useState(false);
    const [loading, setLoading] = useState(false);


    const goToView = (view: string) => {
        setViewNavigation({
            view: view,
            oldView: viewNavigation.view
        });
    }

    const goBack = () => {

        setViewNavigation({
            view: viewNavigation.oldView,
            oldView: ""
        });

        if (viewNavigation.oldView === "list") {
            console.log("entra");
            setState({
                ...state,
                activityes: [...state.dataSetactivityes]
            });
        }


    }

    const setActivity = (activity: ActivityInterface) => {

        setState({
            ...state,
            dataSetactivityes: [...state.dataSetactivityes, activity],
            activityes: [...state.activityes, activity],

        });

    }

    const onCheckTodo = (activity: ActivityInterface) => {

        let newActivityes = [...state.activityes];
        let foundIndex = newActivityes.findIndex(act => activity.key === act.key);

        if (foundIndex === -1) {
            return;
        }
        newActivityes[foundIndex].status = "REALIZADO";

        let newDataSetActivityes = [...state.dataSetactivityes];
        let foundIndexDataSet = newDataSetActivityes.findIndex(act => activity.key === act.key);
        newDataSetActivityes[foundIndexDataSet].status = "REALIZADO";



        setState({
            ...state,
            activityes: newActivityes,
            dataSetactivityes: newDataSetActivityes
        });


    }

    const onSearchItem = (value: string) => {

        if (value.length === 0) {
            setState({
                ...state,
                activityes: [...state.dataSetactivityes]
            });

        } else {
            let searchResult = [...state.dataSetactivityes].filter(ele => ele.descripcion.toLowerCase().includes(value.toLowerCase()));

            setState({
                ...state,
                activityes: searchResult
            });
        }


    }
    const onEditActivity = (activity: ActivityInterface) => {
        let newActivityes = [...state.dataSetactivityes];
        let foundIndex = newActivityes.findIndex(act => activitySelected?.key === act.key);

        if (foundIndex === -1) {
            return;
        }
        newActivityes[foundIndex].descripcion = activity.descripcion;

        setState({
            ...state,
            activityes: newActivityes
        });

    }


    const goToRegister = () => {
        goToView(Views.create);
    }

    const goToEdit = (value: ActivityInterface) => {
        value.date = moment(value.date);
        setActivitySelected(value);
        goToView(Views.edit);

    }

    const GenerateRandomDescription = (limit: number) => {
        setModalRandomVisible(false);
        setLoading(true);

        getRamdomFactsWithLimits(limit).then(res => {
            let newState = { ...state };
            newState.dataSetactivityes = newState.dataSetactivityes.concat(res);
            newState.activityes = newState.activityes.concat(res);
            console.log("act", newState.activityes)
            setState(newState);
            /* setState({
                ...state,
                dataSetactivityes:[...state.dataSetactivityes,res],
                activityes:[...state.activityes,res],
    
            }); */



        });
        setLoading(false);


    }






    let component;

    if (viewNavigation.view === Views.list) {
        component = <AcitvityList
            dataSet={state.activityes}
            goToRegister={goToRegister}
            loading={loading}
            goToEdit={goToEdit}
            onSearchItem={onSearchItem}
            onGenerateRandom={() => setModalRandomVisible(true)}
            onCheckTodo={onCheckTodo}
        />;
    }
    if (viewNavigation.view === Views.create) {
        component = <CreateActivity
            goBackAction={goBack}
            addActivity={setActivity} />;
    }
    if (viewNavigation.view === Views.edit) {
        component = <EditActivity
            defaultData={activitySelected}
            goBackAction={goBack}
            onEditActivity={onEditActivity} />;
    }



    return (
        <div className="app-wrapper">
            <ModalRandomDescription
                isVisible={modalRandomVisible}
                onCloseModal={() => setModalRandomVisible(false)}
                onGenerateAction={GenerateRandomDescription}
            />
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
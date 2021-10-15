import { APP_NAME, DateFormatString } from "./constants";
import { ActivityInterface } from "./interfaces/activity";
import { FactsInterface } from "./interfaces/facts";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';


const HelloWorld = ()=>{
    
    return APP_NAME;
}

/**
 * this methos parse facts array to activity array
 * 
 * @param facts array of facts 
 * @returns array of activityes description based on facts
 */
const parseFactstoDataSet = function (facts:Array<FactsInterface>):Array<ActivityInterface>{

    let array:Array<ActivityInterface> = [];

    facts.forEach( (desc:FactsInterface,index:number)=>{

        array.push({
            key:uuidv4(),
            name:"random "+index,
            descripcion:desc.fact,
            status:'PENDIENTE',
            date: moment().format(DateFormatString),
        });
        
        
    } );


    return array;



}

export {
    HelloWorld,
    parseFactstoDataSet
}
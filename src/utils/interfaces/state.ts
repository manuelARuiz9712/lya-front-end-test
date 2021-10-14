import { ActivityInterface } from "./activity";

export enum Views {
    list  = 'list',
    create = 'create',
    edit = 'edit'
}

export interface stateInterface {
    dataSetactivityes:Array<ActivityInterface>,
    activityes:Array<ActivityInterface>,
  
}

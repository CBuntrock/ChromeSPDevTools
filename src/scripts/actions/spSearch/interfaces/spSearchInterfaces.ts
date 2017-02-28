
import { ActionCreator, ActionCreatorsMapObject, Dispatch } from "redux";
import { IAction, IMessageData } from "./../../common/interfaces";


export interface IInitialState {
    isWorkingOnIt: boolean;
}

export interface ISearchResult {
    id: string;
    title: string;
}



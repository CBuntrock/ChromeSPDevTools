
import { ActionCreator, ActionCreatorsMapObject, Dispatch } from "redux";
import { IAction, IMessageData } from "./../../common/interfaces";


export interface IInitialState {
    isWorkingOnIt: boolean;
}

export interface ISearchResult {
    id: string;
    title: string;
}

export interface ISpSearchActionCreatorsMapObject{
    setQueryText: ActionCreator<IAction<string>>;
}

export interface ISpSearchProps {
    closeWindowFunction: any;
    currentUserHasPermissions: boolean;
    isWorkingOnIt: boolean;
    messageData: IMessageData;
    searchText: string;
    managedProperties: string[];
    actions: ISpPropertyBagActionCreatorsMapObject;
}

export interface IMapStateToProps {
    currentUserHasPermissions: boolean;
    isWorkingOnIt: boolean;
    messageData: IMessageData;
    searchText: string;
    managedProperties: string[];
}

export interface IMapStateToPropsState {
    spPropertyBag: IInitialState;
}



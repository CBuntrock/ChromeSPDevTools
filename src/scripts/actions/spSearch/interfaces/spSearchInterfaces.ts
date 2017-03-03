
import { ActionCreator, ActionCreatorsMapObject, Dispatch } from "redux";
import { IAction, IMessageData } from "./../../common/interfaces";


export interface IInitialState {
    currentUserHasPermissions: boolean;
    isWorkingOnIt: boolean;
    messageData: IMessageData;
    searchText: string;
    managedProperties: string[];
    searchResults: ISearchResult[];
}

export interface ISearchResult {
    id: string;
    title: string;
}

export interface ISpSearchActionCreatorsMapObject{
    doSearch: (text: string) =>
        (dispatch: Dispatch<IAction<ISearchResult[]>>) => Promise<void>;
    setWorkingOnIt: ActionCreator<IAction<boolean>>;
    setUserHasPermissions: ActionCreator<IAction<boolean>>;
    setMessageData: ActionCreator<IAction<IMessageData>>;
}

export interface IMapDispatchToProps {
    actions: ISpSearchActionCreatorsMapObject;
}

export interface ISpSearchProps {
    closeWindowFunction: any;
    currentUserHasPermissions: boolean;
    isWorkingOnIt: boolean;
    messageData: IMessageData;
    searchText: string;
    managedProperties: string[];
    actions: ISpSearchActionCreatorsMapObject;
}

export interface IMapStateToProps {
    currentUserHasPermissions: boolean;
    isWorkingOnIt: boolean;
    messageData: IMessageData;
    searchText: string;
    managedProperties: string[];
    searchResults: ISearchResult[];
}

export interface IMapStateToPropsState {
    spSearch: IInitialState;
}



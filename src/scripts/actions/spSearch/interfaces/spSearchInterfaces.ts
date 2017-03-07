
import { ActionCreator, ActionCreatorsMapObject, Dispatch } from "redux";
import { IAction, IMessageData } from "./../../common/interfaces";

export interface ISearchResult {
    id: string;
    title: string;
}

export interface IInitialState {
    userHasPermission: boolean;
    isWorkingOnIt: boolean;
    messageData: IMessageData;
    searchText: string;
    managedProperties: string[];
    searchResults: ISearchResult[];
}


export interface ISpSearchActionCreatorsMapObject extends ActionCreatorsMapObject{
    doSearch: (searchText: string) =>
        (dispatch: Dispatch<IAction<ISearchResult[]>>) => Promise<void>;
    setWorkingOnIt: ActionCreator<IAction<boolean>>;
    checkUserPermissions: (permissionKing: SP.PermissionKind) =>
        (dispatch: Dispatch<IAction<ISearchResult[]>>) => Promise<void>;
    setMessageData: ActionCreator<IAction<IMessageData>>;
}

export interface IMapDispatchToProps {
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





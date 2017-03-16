import { MessageBarType } from "office-ui-fabric-react/lib/MessageBar";
import { ActionCreator, ActionCreatorsMapObject, Dispatch } from "redux";
import { ActionsId as actions, constants } from "./../constants/constants";

import { ISearchResult, ISpSearchActionCreatorsMapObject } from "../interfaces/spSearchInterfaces";
import { IAction, IMessageData } from "./../../common/interfaces";

import SpSearchApi from "../api/SpSearchApi";


const api = new SpSearchApi();

const setWorkingOnIt: ActionCreator<IAction<boolean>> = (isWorkingOnIt: boolean): IAction<boolean> => {
    return {
        payload: isWorkingOnIt,
        type: actions.SET_WORKING_ON_IT
    };
};

const setNoPermissions: ActionCreator<IAction<boolean>> = (): IAction<boolean> => {
    return {
        payload: true,
        type: actions.SET_NO_PERMISSIONS
    };
};

const setMessageData: ActionCreator<IAction<IMessageData>> = (messageData: IMessageData): IAction<IMessageData> => {
    return {
        payload: messageData,
        type: actions.SET_MESSAGE_DATA
    };
};

const handleAsyncError: ActionCreator<IAction<IMessageData>> =
    (errorMessage: string, exceptionMessage: string): IAction<IMessageData> => {
        // tslint:disable-next-line:no-console
        console.log(exceptionMessage);
        return {
            payload: {
                message: errorMessage,
                showMessage: true,
                type: MessageBarType.success
            },
            type: actions.HANDLE_ASYNC_ERROR
        };
    };

const checkUserPermissions = (permissionKing: SP.PermissionKind) => {
    return (dispatch: Dispatch<IAction<void>>) => {
        return api.checkUserPermissions(permissionKing).then((hasPermissions: boolean) => {
            if (!hasPermissions) {
                dispatch(setNoPermissions());
            }
        }).catch((reason: any) => {
            dispatch(handleAsyncError(constants.ERROR_MESSAGE_CHECK_USER_PERMISSIONS, reason));
        });
    };
};

const doSearch = (searchText: string) => {
    return (dispatch: Dispatch<IAction<ISearchResult[]>>) => {
        return api.getResults().then((results: ISearchResult[]) => {
            dispatch(showResults(results));
        }).catch((reason: any) => {
            dispatch(handleAsyncError(constants.ERROR_MESSAGE_GET_ALL_RESULTS, reason));
        });
    };
};


const showResults: ActionCreator<IAction<ISearchResult[]>> =
    (results: ISearchResult[]): IAction<ISearchResult[]> => {
        return {
            payload: results ,
            type: actions.SHOW_RESULTS
        };
    };



const spSearchActionCreatorsMapObject: ISpSearchActionCreatorsMapObject = {
    doSearch,
    setWorkingOnIt,
    checkUserPermissions,
    setMessageData
};

export default spSearchActionCreatorsMapObject;

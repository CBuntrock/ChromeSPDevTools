import { MessageBarType } from "office-ui-fabric-react/lib/MessageBar";
import { ActionCreator, ActionCreatorsMapObject, Dispatch } from "redux";
import { ActionsId as actions, constants } from "./../constants/constants";

import { ISearchResult, ISpSearchActionCreatorsMapObject } from "../interfaces/spSearchInterfaces";
import { IAction, IMessageData } from "./../../common/interfaces";

import SpSearchApi from "../api/SpSearchApi";


const api = new SpSearchApi();

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

const doSearch = (searchText: string) => {
    return (dispatch: Dispatch<IAction<ISearchResult[]>>) => {
        return api.getResults().then((results: ISearchResult[]) => {
            console.log(results.length);
        }).catch((reason: any) => {
            dispatch(handleAsyncError(constants.ERROR_MESSAGE_GET_ALL_RESULTS, reason));
        });
    };
};

const spSearchActionCreatorsMapObject: ISpSearchActionCreatorsMapObject = {
    doSearch
};

export default spSearchActionCreatorsMapObject;

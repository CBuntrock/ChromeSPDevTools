import { MessageBarType } from "office-ui-fabric-react/lib/MessageBar";
import { ActionCreator, ActionCreatorsMapObject, Dispatch } from "redux";
import SpSearchApi from "../api/SpSearchApi";
import { IAction, IMessageData } from "./../../common/interfaces";
import { ISearchResult, ISpSearchActionCreatorsMapObject } from "../interfaces/spSearchInterfaces";
import { ActionsId as actions, constants } from "./../constants/constants";

const api = new SpSearchApi();


const setQueryText: ActionCreator<IAction<string>> = (filterText: string): IAction<string> => {
    return (dispatch: Dispatch<IAction<ISearchResult[]>>) => {
        return api.getResults(filterText).then(
            (resultsRet: ISearchResult[]) => {
                console.log(resultsRet.length)
            }
        ).catch((reason: any) => {
            dispatch(handleAsyncError(constants.ERROR_MESSAGE_GET_RESULTS, reason));
        });
    };
};

const spSearchActionCreatorsMapObject: ISpSearchActionCreatorsMapObject = {

    setQueryText

};

export default spSearchActionCreatorsMapObject;

import { MessageBarType } from "office-ui-fabric-react/lib/MessageBar";
import { IAction, IMessageData } from "./../../common/interfaces";

import { IInitialState, IMapDispatchToProps } from "../interfaces/spSearchInterfaces";

import { ActionsId as actions, constants } from "./../constants/constants";

import { ISearchResult } from "../interfaces/spSearchInterfaces";

const initialState: IInitialState = {
    userHasPermission: false,
    isWorkingOnIt: false,
    managedProperties: [],
    messageData: {
        message: constants.EMPTY_STRING,
        showMessage: false,
        type: MessageBarType.info
    },
    searchResults: [],
    searchText: constants.EMPTY_STRING

};

export const spSearchReducer = (state: IInitialState = initialState, action: IAction<any>): IInitialState => {

    switch (action.type) {
        case actions.SET_MESSAGE_DATA:
            const messageData: IMessageData = action.payload;
            return { ...state, messageData };
        case actions.SET_USER_PERMISSIONS:
            const userHasPermission: boolean = action.payload;
            return { ...state, userHasPermission };
        case actions.SET_WORKING_ON_IT:
            const isWorkingOnIt: boolean = action.payload;
            return { ...state, isWorkingOnIt };
        case actions.HANDLE_ASYNC_ERROR:
            const errorMessage: IMessageData = action.payload;
            return { ...state, isWorkingOnIt: false, messageData: errorMessage };
        case actions.SHOW_RESULTS:
            const results: ISearchResult[] = action.payload;
            return {
                ...state,
                searchResults: results,
                isWorkingOnIt: false
            };
        default:
            return state;
    }

};

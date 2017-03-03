import { MessageBarType } from "office-ui-fabric-react/lib/MessageBar";
import { IAction, IMessageData } from "./../../common/interfaces";

import { IInitialState, IMapDispatchToProps } from "../interfaces/spSearchInterfaces";

import { ActionsId as actions, constants } from "./../constants/constants";

const initialState: IInitialState = {
    currentUserHasPermissions: false,
    isWorkingOnIt: true,
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
        default:
            return state;
    }

};

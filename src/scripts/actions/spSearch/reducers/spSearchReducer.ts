import { MessageBarType } from "office-ui-fabric-react/lib/MessageBar";
import { IAction, IMessageData } from "./../../common/interfaces";
import { IInitialState } from "../interfaces/spSearchInterfaces";
import { ActionsId as actions, constants } from "./../constants/constants";

const initialState: IInitialState = {
    isWorkingOnIt: true,
};

export const spSearchReducer = (state: IInitialState = initialState, action: IAction<any>): IInitialState => {

    switch (action.type) {
        default:
            return state;
    }

};

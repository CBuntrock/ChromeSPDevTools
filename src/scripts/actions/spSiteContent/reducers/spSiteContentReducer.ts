import { MessageBarType } from "office-ui-fabric-react/lib/MessageBar";
import { IInitialState, ISiteContent } from "../interfaces/spSiteContentInterfaces";
import { IAction, IMessageData } from "./../../common/interfaces";
import { ActionsId as actions, SpSiteContentConstants as constants } from "./../constants/spSiteContentConstants";

const initialState: IInitialState = {
    filterText: "",
    isWorkingOnIt: true,
    messageData: { message: "", showMessage: false, type: MessageBarType.info },
    openInNewTab: true,
    showAll: false,
    siteLists: []
};

export const spSiteContentReducer = (state: IInitialState = initialState, action: IAction<any>): IInitialState => {
    switch (action.type) {
        case actions.SET_SITE_CONTENT:
            const allSiteContent: ISiteContent[] = action.payload;
            return { ...state, isWorkingOnIt: false, siteLists: allSiteContent };
        case actions.SET_SHOW_ALL:
            const showAll: boolean = action.payload;
            return { ...state, showAll };
        case actions.SET_OPEN_IN_NEW_TAB:
            const openInNewTab: boolean = action.payload;
            return { ...state, openInNewTab };
        case actions.SET_TEXT_FILTER:
            const filterText: string = action.payload;
            return { ...state, filterText };
        case actions.SET_MESSAGE_DATA:
            const messageData: IMessageData = action.payload;
            return { ...state, isWorkingOnIt: false, messageData };
        default:
            return state;
    }
};
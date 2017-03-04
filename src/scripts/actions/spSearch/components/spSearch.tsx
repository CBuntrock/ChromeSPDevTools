/* tslint:disable:max-line-length */

import { MessageBarType } from "office-ui-fabric-react/lib/MessageBar";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import searchActionsCreatorsMap from "../actions/spSearchActions";
import { IMapDispatchToProps, IMapStateToProps,  IMapStateToPropsState, ISpSearchActionCreatorsMapObject, ISpSearchProps } from "../interfaces/spSearchInterfaces";
import MessageBar from "./../../common/components/MessageBar";
import { WorkingOnIt } from "./../../common/components/WorkingOnIt";
import SpSearchArea from "./spSearchArea";


interface IMapDispatchToISpSearchProps {
    actions: ISpSearchActionCreatorsMapObject;
}
class SpSearch extends React.Component<ISpSearchProps, {}> {
    constructor() {
        super();
        this.onMessageClose = this.onMessageClose.bind(this);
    }
    public render() {
        if (this.props.isWorkingOnIt) {
            return <WorkingOnIt />;
        } else {
            const hasPermissions: boolean = this.props.currentUserHasPermissions;
            return <div className="action-container sp-peropertyBags">
                <MessageBar
                    onCloseMessageClick={this.onMessageClose}
                    message={this.props.messageData.message}
                    messageType={this.props.messageData.type}
                    showMessage={this.props.messageData.showMessage}
                />
                {hasPermissions && <SpSearchArea searchText={this.props.searchText } managedProperties={this.props.managedProperties } />}

            </div>;
        }
    }

    private componentDidMount() {
        this.props.actions.checkUserPermissions(SP.PermissionKind.manageWeb);
    }
    private onMessageClose() {
        this.props.actions.setMessageData({
            message: "",
            showMessage: false,
            type: MessageBarType.info
        });
    }
}

const mapStateToProps = (state: IMapStateToPropsState, ownProps: any): IMapStateToProps => {
    return {
        currentUserHasPermissions: state.spSearch.userHasPermission,
        isWorkingOnIt: state.spSearch.isWorkingOnIt,
        managedProperties: state.spSearch.managedProperties,
        messageData: state.spSearch.messageData,
        searchResults: state.spSearch.searchResults,
        searchText: state.spSearch.searchText
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): IMapDispatchToISpSearchProps => {
    return {
        actions: bindActionCreators(searchActionsCreatorsMap, dispatch) as any
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpSearch);


/* tslint:enable:max-line-length */

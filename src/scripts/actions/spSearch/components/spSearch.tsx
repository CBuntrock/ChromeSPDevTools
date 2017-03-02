/* tslint:disable:max-line-length */

import { MessageBarType } from "office-ui-fabric-react/lib/MessageBar";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import searchActionsCreatorsMap from "../actions/spSearchActions";
import { IMapStateToProps, IMapStateToPropsState, ISpSearchActionCreatorsMapObject, ISpSearchProps } from "../interfaces/spSearchInterfaces";
import MessageBar from "./../../common/components/MessageBar";
import { WorkingOnIt } from "./../../common/components/WorkingOnIt";
import { SpSearchArea} from "./spSearchArea";
import { SpSearchResultList} from "./spSearchResultList";

interface IMapDispatchToISpPropertyBagProps {
    actions: ISpPropertyBagActionCreatorsMapObject;
}
class SpSearch extends React.Component<ISpPropertyBagProps, {}> {
    public searchComponent: HTMLElement;
    constructor() {
        super();
        this.onMessageClose = this.onMessageClose.bind(this);
        this.filterRef = this.filterRef.bind(this);
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
                {hasPermissions && <SpSearchArea addProperty={this.props.actions.createProperty}  />}
                {hasPermissions && <SpSearchResultList items={this.props.webProperties} filterString={this.props.filterText} />}
            </div>;
        }
    }

    private filterRef(element: HTMLElement): void {
        this.searchComponent = element;
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
        currentUserHasPermissions: state.spPropertyBag.userHasPermission,
        filterText: state.spPropertyBag.filterText,
        isWorkingOnIt: state.spPropertyBag.isWorkingOnIt,
        messageData: state.spPropertyBag.messageData,
        webProperties: state.spPropertyBag.webProperties
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): IMapDispatchToISpPropertyBagProps => {
    return {
        actions: bindActionCreators(propertyActionsCreatorsMap, dispatch) as any
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpPropertyBag);

/* tslint:enable:max-line-length */

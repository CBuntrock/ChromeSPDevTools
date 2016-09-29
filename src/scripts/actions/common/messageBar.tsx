/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="./interfaces.ts"/>
/// <reference path="./../common/enums.ts"/>
import * as React from 'react';
import {MessageType} from './enums'
import { MessageBarStyles as styles } from './Styles'

interface MessageBarProps {
    messageType: MessageType,
    message: string,
    showMessage: boolean
}
interface MessageBarState {
    showMessage: boolean
}

export default class MessageBar extends React.Component<MessageBarProps, MessageBarState> {

    constructor() {
        super();
        this.state = {
            showMessage: false
        }
    }
    componentDidMount() {
        this.setState({
            showMessage: this.props.showMessage
        });
        if (this.props.showMessage) {
            this.startShowTimeOut();
        }
    }
    startShowTimeOut() {
        setTimeout(function () {
            this.setState({ showMessage: false });
        }.bind(this), 5000);
    }
    componentWillReceiveProps(nextProps: any) {
        this.setState({
            showMessage: nextProps.showMessage
        });
        if (nextProps.showMessage) {
            this.startShowTimeOut();
        }
    }
    public render() {
        if (!this.state.showMessage) {
            return <div></div>;
        } else {
            let messageTitle: string;
            let containerStyle: any;
            switch (this.props.messageType) {
                case MessageType.Error:
                    containerStyle = styles.Error
                    messageTitle = "Error"
                    break;
                case MessageType.Success:
                    containerStyle = styles.Success
                    messageTitle = "Success"
                    break;
                case MessageType.Info:
                    containerStyle = styles.Info
                    messageTitle = "Info"
                    break;
            }
            return <div style={containerStyle}>
                <span style={styles.span}>
                    <strong>{messageTitle} </strong>{this.props.message}
                </span>
            </div>
        }
    }
}
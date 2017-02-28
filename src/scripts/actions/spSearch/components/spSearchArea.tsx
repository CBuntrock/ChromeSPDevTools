import * as React from "react";

import { IAction } from "./../../common/interfaces";

import { Button, ButtonType } from "office-ui-fabric-react/lib/Button";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";

interface ISearchAreaProps {
    setSearchText: (searchText: string) => IAction<string>;
    searchStr: string;
    parentOverrideClass?: string;
    referenceCallBack?: (element: HTMLElement) => void;
    children?: any;
}

class SpSearchArea extends React.Component<ISearchAreaProps, {}> {
    public input: HTMLElement;
    constructor() {
        super();
        this._divRefCallBack = this._divRefCallBack.bind(this);
    }
    public componentDidMount() {
        if (this.input) {
            this.input.focus();
        }
    }
    public render() {

        return <div className="ms-Grid filters-container">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6" ref={this._divRefCallBack}>
                    <SearchBox value={this.props.searchStr} onChange={this.props.setSearchText} />
                </div>
                <div className={this.props.parentOverrideClass || "ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6"}>
                    <Button
                        buttonType={ButtonType.icon}
                        icon="Search"
                        rootProps={{ title: "Delete" }}
                        ariaLabel="Search"
                     />
                </div>
            </div>
        </div>;
    }

    private _divRefCallBack(element: HTMLElement): void {
        if (element && !!this.props.referenceCallBack) {
            this.props.referenceCallBack(element.querySelector("input"));
        }
    }
}

export default SpSearchArea;

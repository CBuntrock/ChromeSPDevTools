import * as React from "react";

import { IAction } from "./../../common/interfaces";

import { ISearchResult, ISpSearchActionCreatorsMapObject } from "../interfaces/spSearchInterfaces";

import { Button, ButtonType } from "office-ui-fabric-react/lib/Button";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";


interface ISearchAreaProps {
    searchText: string;
    managedProperties: string[];
    parentOverrideClass?: string;
}

export default class SpSearchArea extends React.Component<ISearchAreaProps, {}> {
    public input: HTMLElement;
    constructor() {
        super();
    }
    public componentDidMount() {
        if (this.input) {
            this.input.focus();
        }
    }
    public render() {

        return <div className="ms-Grid filters-container">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6">
                    <SearchBox value={this.props.searchText}  />
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

}



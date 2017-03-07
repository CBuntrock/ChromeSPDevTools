import * as React from "react";

import { IAction } from "./../../common/interfaces";

import { constants } from "../constants/constants";

import { ISearchResult, ISpSearchActionCreatorsMapObject } from "../interfaces/spSearchInterfaces";

import { Button, ButtonType } from "office-ui-fabric-react/lib/Button";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";


interface ISearchAreaProps {
    parentOverrideClass?: string;
    doSearch: Function;
}

interface ISearchAreaState {
    searchText: string;
}


export default class SpSearchArea extends React.Component<ISearchAreaProps, ISearchAreaState> {
    public input: HTMLElement;
    constructor() {
        super();
        this.state = { searchText: constants.EMPTY_STRING};
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onKeySearchTextChange = this.onKeySearchTextChange.bind(this);
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
                    <SearchBox value={this.state.searchText} onChange={this.onKeySearchTextChange}  />
                </div>
                <div className={this.props.parentOverrideClass || "ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6"}>
                    <Button
                        buttonType={ButtonType.icon}
                        icon="Search"
                        rootProps={{ title: "Delete" }}
                        ariaLabel="Search"
                        onClick={this.onButtonClick}
                     />
                </div>
            </div>
        </div>;
    }

    private onButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        console.log("it's executing onButtonClick:" + this.state.searchText);
        this.props.doSearch(this.state.searchText);
        return false;
    }

    private onKeySearchTextChange(str: string) {
        this.setState({ searchText: str });
    }

}



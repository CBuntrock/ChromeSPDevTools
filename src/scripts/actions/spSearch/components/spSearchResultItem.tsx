import { FocusZone, FocusZoneDirection } from "office-ui-fabric-react/lib/FocusZone";
import { Image } from "office-ui-fabric-react/lib/Image";
import { List } from "office-ui-fabric-react/lib/List";
import { Toggle } from "office-ui-fabric-react/lib/Toggle";
import * as React from "react";
import { ISearchResult } from "../interfaces/spSearchInterfaces";

interface ISpFeaturesItemProps {
    item: ISearchResult;
}

const SpSearchResultItem: React.StatelessComponent<ISpFeaturesItemProps> = (props: ISpFeaturesItemProps) => {
    // tslint:disable-next-line:max-line-length
    const itemClassName = "ms-ListBasicExample-itemContent ms-ListBasicExample-featureName ms-font-m ms-fontColor-themePrimary ms-fontWeight-semibold";
    return <div className="ms-ListBasicExample-itemCell" id={props.item.id}>
        <div className={itemClassName}>
            {props.item.title}
        </div>
    </div>;

};

export default SpSearchResultItem;

import * as React from "react";

import { FocusZone, FocusZoneDirection } from "office-ui-fabric-react/lib/FocusZone";
import { Image } from "office-ui-fabric-react/lib/Image";
import { List } from "office-ui-fabric-react/lib/List";
import { ISearchResult } from "../interfaces/spSearchInterfaces";
import { constants } from "./../constants/constants";
import SpFeaturesItem from "./SpSearchResultItem";

interface ISpFeaturesListProps {
    items: ISearchResult[];
}

const SpFeaturesList: React.StatelessComponent<ISpFeaturesListProps> = (props: ISpFeaturesListProps) => {

    const items: ISearchResult[] = props.items;

    const renderItem = (item: ISearchResult, index: number) => {
        return <SpFeaturesItem item={item} key={index} />;
    };
    return <div>
        <FocusZone direction={FocusZoneDirection.vertical} >
            <List items={items} onRenderCell={renderItem} />
        </FocusZone>
    </div>;
};

export default SpFeaturesList;

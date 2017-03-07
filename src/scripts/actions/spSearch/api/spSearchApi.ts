import { ISearchResult } from "../interfaces/spSearchInterfaces";
import ApiBase from "./../../common/apiBase";
import { constants } from "./../constants/constants";

export default class SpSearchApi extends ApiBase {
    public getResults(): Promise<ISearchResult[]> {
        return new Promise((resolve, reject) => {
            this.reject = reject;
            const reqUrl = `${_spPageContextInfo.webAbsoluteUrl}${constants.PROPERTY_REST_REQUEST_URL}`;
            this.getRequest(reqUrl).then((response: any) => {
                const props: ISearchResult[] = [];
                const totalRows = response.data.PrimaryQueryResult.RelevantResults.RowCount;
                if (totalRows > 0) {
                    const resultData = response.data.PrimaryQueryResult.RelevantResults.Table.Rows;
                    for (const result in resultData) {
                        if (resultData.hasOwnProperty(result)) {
                            const propVal = resultData[result];
                            props.push({
                                id: propVal.Cells[1].Value,
                                title: propVal.Cells[3].Value
                            });
                        }
                    }
                }
                resolve(props);
            }).catch((error: any) => {
                this.reject(error);
            });
        });
    }
}

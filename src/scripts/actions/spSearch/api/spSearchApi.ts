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
                const rawData = response.data;

                resolve(props);
            }).catch((error: any) => {
                this.reject(error);
            });
        });
    }
}

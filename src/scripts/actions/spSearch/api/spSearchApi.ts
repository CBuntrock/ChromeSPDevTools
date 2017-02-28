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
                debugger;
                const rawData = response.data;
             /*   for (const prop in rawData) {
                    if (rawData.hasOwnProperty(prop)) {
                        const propVal = rawData[prop];
                        if (typeof (propVal) === constants.STRING_STRING) {
                            // tslint:disable-next-line:max-line-length
                            const value = propVal.replace(constants.PROPERTY_REST_DOUBLEQUOTES_REGEX, constants.PROPERTY_REST_DOUBLEQUOTES);
                            props.push({
                                key: this.decodeSpCharacters(prop),
                                value
                            });
                        }
                    }
                }*/
                resolve(props);
            }).catch((error: any) => {
                this.reject(error);
            });
    }
}

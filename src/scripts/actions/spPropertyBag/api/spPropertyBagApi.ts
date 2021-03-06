import ApiBase from "./../../common/apiBase";
import { constants } from "./../constants/constants";

import { IProperty } from "../interfaces/spPropertyBagInterfaces";

export default class SpPropertyBagApi extends ApiBase {
    public decodeSpCharacters(strToDecode: string): string {
        strToDecode = strToDecode.replace(constants.PROPERTY_REST_PREFIX, constants.EMPTY_STRING);
        const matchesArray = strToDecode.match(constants.PROPERTY_REST_DECODE_REGEX);
        if (!!matchesArray) {
            matchesArray.forEach((str: string) => {
                const decoded = decodeURIComponent(str
                    .replace(constants.PROPERTY_REST_UNDERSCORE_REGEX, constants.EMPTY_STRING)
                    .replace(constants.PROPERTY_REST_UNDERSCORE_PREFIX_REGEX, constants.PERCET_STRING));
                strToDecode = strToDecode.replace(str, decoded);
            });
        }
        return strToDecode;
    }
    public getProperties(): Promise<IProperty[]> {
        return new Promise((resolve, reject) => {
            const reqUrl = `${_spPageContextInfo.webAbsoluteUrl}${constants.PROPERTY_REST_REQUEST_URL}`;
            this.getRequest(reqUrl).then((response: any) => {
                const props: IProperty[] = [];
                const rawData = response.data;
                for (const prop in rawData) {
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
                }
                resolve(props);
            }).catch((error: any) => {
                reject(error);
            });
        });
    }

    public deleteProperty(property: IProperty): Promise<IProperty> {
        return this.setProperty({ ...property, value: null });
    }

    public createProperty(property: IProperty): Promise<IProperty> {
        return this.setProperty(property);
    }

    public updateProperty(property: IProperty): Promise<IProperty> {
        return this.setProperty(property);
    }

    private setProperty(property: IProperty): Promise<IProperty> {
        return new Promise((resolve, reject) => {
            const ctx = SP.ClientContext.get_current();
            const web = ctx.get_web();
            const allProperties = web.get_allProperties();

            allProperties.set_item(property.key, property.value);

            web.update();

            ctx.executeQueryAsync((sender: any, err: any) => {
                resolve(property);
            }, this.getErroResolver(reject, constants.ERROR_MESSAGE_RESOLVER_SETTING_PROPERTY));
        });
    }
}

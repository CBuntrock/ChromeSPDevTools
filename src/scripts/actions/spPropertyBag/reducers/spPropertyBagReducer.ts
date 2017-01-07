import { PropertyActionID as actions } from './../constants/spPropertyBagActionsIDs'

export const spPropertyBagReducer = (properties:Array<IKeyValue> = [], action:any) => {
    switch (action.type) {
        case actions.CREATE_PROPERTY:
            return [...properties, Object.assign({}, action.property)]
        case actions.DELETE_PROPERTY:
            return [...properties.filter(prop => prop.key !== action.prop.key)]
        case actions.UPDATE_PROPERTY:
            return [...properties.filter(prop => prop.key !== action.prop.key), Object.assign({}, action.property)]
        default:
            return properties;
    }

}
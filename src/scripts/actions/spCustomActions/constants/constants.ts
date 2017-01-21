export const ActionsId  = {
    CREATE_CUSTOM_ACTION: 'CREATE_CUSTOM_ACTION',
    UPDATE_CUSTOM_ACTION: 'UPDATE_CUSTOM_ACTION',
    DELETE_CUSTOM_ACTION: 'DELETE_CUSTOM_ACTION',
    SET_ALL_CUSTOM_ACTIONS: 'SET_ALL_CUSTOM_ACTIONS',
    SET_FILTER_TEXT: 'SET_FILTER_TEXT',
    SET_WORKING_ON_IT: 'SET_WORKING_ON_IT',
    SET_MESSAGE_DATA: 'SET_MESSAGE_DATA',
    SET_USER_PERMISSIONS: 'SET_USER_PERMISSIONS'
}


export const constants  = {
    COMPONENT_DIV_ID: 'spCuastomActionsBaseDiv',
    TEXTBOX_PREFIX: 'spPropInput_',
    UNDEFINED_STRING: 'undefined',
    STRING_STRING: 'string',
    EMPTY_STRING: '',
    PERCET_STRING:'%',
    MODAL_DIALOG_TITLE: 'Site Custom Actions',
    MODAL_DIALOG_WIDTH: '700px',
    CONFIRM_DELETE_CUSTOM_ACTION: 'Are you sure you want to remove this property?',
    EMPTY_TEXTBOX_ERROR_MESSAGE: 'The value can not be empty',
    SAVE_TEXT:'Save',
    DELETE_TEXT:'Delete',
    CANCEL_TEXT:'Cancel',
    EDIT_TEXT:'Edit',
    CREATE_TEXT: 'Create',
    NEW_CUSTOM_ACTION_TITLE: 'New web property',
    NEW_CUSTOM_ACTION_KEY_TITLE: 'New property name',
    NEW_CUSTOM_ACTION_KEY_PLACEHOLDER: 'Property Name',
    NEW_CUSTOM_ACTION_VALUE_TITLE: 'New property value',
    NEW_CUSTOM_ACTION_VALUE_PLACEHOLDER: 'Property Value',
    MESSAGE_USER_NO_PERMISSIONS:'The current user does NOT have permissions to work with the web property bags.',
    MESSAGE_CUSTOM_ACTION_CREATED:'A new property has been created.',
    MESSAGE_CUSTOM_ACTION_DELETED:'The selected property has been deleted.',
    MESSAGE_CUSTOM_ACTION_UPDATED:'The selected property has been updated.',
    CUSTOM_ACTION_REST_REQUEST_URL: '/usercustomactions',
    CUSTOM_ACTION_REST_PREFIX: 'OData_',
    CUSTOM_ACTION_REST_DECODE_REGEX:/_x00([0-9A-F]{2})_/gi,
    CUSTOM_ACTION_REST_UNDERSCORE_REGEX:/_/gi,
    CUSTOM_ACTION_REST_UNDERSCORE_PREFIX_REGEX:/x00/gi,
    CUSTOM_ACTION_REST_DOUBLEQUOTES_REGEX:/"/g,
    CUSTOM_ACTION_REST_DOUBLEQUOTES: '&quot;'
}

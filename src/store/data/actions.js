export const RQ = {
    FC_BROADCAST_LIST:"FC_BROADCAST_LIST",
}
export const REQUEST = (action_name)=>({
    request:action_name+"_REQUEST",
    success:action_name+"_SUCCESS",
    failure:action_name+"_FAILURE",
    error:action_name+"_ERROR",
    loading:action_name+"_LOADING",
});

export const request = (action_name, url, params) => ({
    type:REQUEST(action_name).request,
    action_name:action_name,
    params:params,
    url:url,
});

export const error = (action_name, data) => ({
    type:REQUEST(action_name).error,
    data:data
});

export const success = (action_name, data) => ({
    type:REQUEST(action_name).success,
    action_name:action_name,
    data:data
});

export const failure = (action_name, data) => ({
    type:REQUEST(action_name).failure,
    action_name:action_name,
    data:data
});
export const TEXT_REDUX = "TEXT_REDUX";
export const homeFnc = (name,value) => ({
    type:TEXT_REDUX,
    value:value,
    name:name,
})










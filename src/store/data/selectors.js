import * as actions from './actions';
let preDefaultState = {
    [actions.TEXT_REDUX]:false,
    [actions.RQ.FC_BROADCAST_LIST]:[]
}
export const defaultState = preDefaultState;
export const getData = (state = defaultState,name) => state[actions.RQ[name]];
export const getLoad = (state = defaultState,name) => state[actions.REQUEST(name).loading];
export const getTabData = (state = defaultState,name) => state[name];
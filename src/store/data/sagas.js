import { put, call, takeEvery } from 'redux-saga/effects';
import { message } from 'antd';
import * as actions from './actions';
import api from '../../services';
export function* request(action) {
    try {
        const data = yield call(api.requestApi,action.url,action.params);
        if(data.code===0){
            if(action.params && action.params.success)action.params.success(data);
            if(data.data){
                yield put(actions.success(action.action_name, data.data));
            }else{
                yield put(actions.success(action.action_name, data));
            }
        }else if(data.code===40000){
            setTimeout(()=>{
                message.error("长时间未操作,请重新登录");
            },1000)  
        }else{
            if(action.params && action.params.error){
                action.params.error(data);
            }else{
                message.error(data.msg);
            }
            yield put(actions.error(action.action_name, data));
        }
    }catch (e){
        yield put(actions.failure(action.action_name, {msg:"网络不给力"}));
    }
}
export default  function* () {
    for(const req in actions.RQ){
      let preAction = actions.REQUEST(actions.RQ[req]);
      yield takeEvery(preAction.request, request);
    }
}





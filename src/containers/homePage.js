import React from 'react'
import { connect } from 'react-redux'
import {fromData} from '../store/selectors'
import * as actions from '../store/actions'

import HomePage from '@/components/pages/homePage';

const HomePageContainer = props => <HomePage {...props} />;

const mapStateToProps = state => ({
    homeData: fromData.getTabData(state,actions.TEXT_REDUX),
    broadcastList: fromData.getData(state,actions.RQ.FC_BROADCAST_LIST),
});
const mapDispatchToProps = dispatch => ({
    setData:() => dispatch(actions.homeFnc(fromData.TEXT_REDUX,true)),
    getData:(param) => dispatch(actions.request(actions.RQ.FC_BROADCAST_LIST,"/fc/broadcast/list",{
        params:param,
    })),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)








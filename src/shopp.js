import React from 'react'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'
import { useDispatch } from 'react-redux'

const Shopp = () => {
    const dispatch = useDispatch();
    //const actions = bindActionCreators(actionCreators, dispatch);
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
    return (
        <div>
            {/* <button type="button" class="btn btn-primary btn-sm mx-2" onClick={()=> dispatch(actionCreators.withdrawMoney(100))}>-</button> */}
            {/* <button type="button" class="btn btn-primary btn-sm mx-2" onClick={()=> actions.withdrawMoney(100)}>-</button> */}
            <button type="button" className="btn btn-primary btn-sm mx-2" onClick={()=> withdrawMoney(100)}>-</button>
            Update Balance
            {/* <button type="button" class="btn btn-primary btn-sm mx-2" onClick={()=> dispatch(actionCreators.depositMoney(100))}>+</button> */}
            {/* <button type="button" class="btn btn-primary btn-sm mx-2" onClick={()=> actions.depositMoney(100)}>+</button> */}
            <button type="button" className="btn btn-primary btn-sm mx-2" onClick={()=> depositMoney(100)}>+</button>
        </div>
    )
}

export default Shopp
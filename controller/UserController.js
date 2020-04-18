import React from 'react';
import {connect} from 'dva'
import {User} from '../components/index'

const UserController=({dispatch,user:state})=>{

    // console.log(state);
   function handleOnSubmit(){
        state.data=[
            {title:'我改变数据啦!'},
            {title:'已经改变啦!'},
            {title:'改变啦!'},
            {title:'啦!'},
        ]
        dispatch({
            type:"user/save",
            payload:{...state}
        })
    }
    
    return(
        <div>
        <User data={state.data} 
        title={state.title}
        handleOnSubmit={handleOnSubmit}
        ></User>
        </div>
    )
}
function mapStateToProps(state){
    return{user:state.user}

}
export default connect(mapStateToProps)(UserController)
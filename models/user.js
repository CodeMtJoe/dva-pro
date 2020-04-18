import {request} from '../js/http'
export default {
    namespace:"user",
    state:{
        title:'我TM的就是一个按钮标题',
        data:[]
    },
    reducers:{
        save(state,{payload:{title=state.title,data=state.data}}){
            console.log(data);  
            return{...state,title,data}
        }
    },
    effects:{
        *getComments({payload},{select,call,put}){
            const state=select(x=>{x.user})
            const {data}=yield call(request,{
                type:"get",
                url:'/posts'
            })
            state.data=data;
            yield put({type:"save",payload:{...state}})
        }
    },
    subscriptions:{
        setup({dispatch,history}){
            return history.listen(({pathname,query})=>{
                if(pathname=='/user'){
                    dispatch({
                        type:'getComments',
                        payload:{}
                    })
                }

            })
        }
    }

}
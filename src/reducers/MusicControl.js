const intialState=false;
const toggleTheMusic=(state=intialState,action)=>{
    switch(action.type){
        case "Toggle":return !state;
        default: return state;
    }
}

export default toggleTheMusic;
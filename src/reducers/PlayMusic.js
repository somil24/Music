const intialState={
    title:"",
        artist:"",
        playlist:"",
        img_src:'',
        src:""
};
const PlayMusic=(state=intialState,action)=>{
    switch(action.type){
        case "SetMusic":return{
            title:"Hotel California",
            artist:"The Eagle",
        playlist:"Happy",
        img_src:'https://i.pinimg.com/originals/08/47/95/0847954cfba8f72a045c1b6dbde07589.jpg',
        src:"https://ia800504.us.archive.org/33/items/HotelCalifornia_140/Eagles-HellFreezesOver-HotelCalifornia0.mp3"
    };
        default: return state;
    }
}

export default PlayMusic;
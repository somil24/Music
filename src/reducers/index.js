import { combineReducers } from "redux"
import toggleTheMusic from "./MusicControl"
import PlayMusic from "./PlayMusic"

const rootReducer=combineReducers({
    toggleTheMusic,
    PlayMusic
})

export default rootReducer
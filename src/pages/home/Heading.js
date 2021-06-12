import "./Heading.css"
export default function Heading(props){
    const{
        title,
        artist,
        playlist
    }=props;
    return(
        <div className="Heading-Container">
        <h1>{title}</h1>
        <h3>{artist}</h3>
        <h4>{playlist}</h4>
        </div>
    )
}
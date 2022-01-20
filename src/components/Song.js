import React, {useContext} from "react";
import {MyContext} from "../components/MyContext";

const Song = () => {
    const song = useContext(MyContext);
    return(
        <MyContext.Consumer>
            { value => <h1>It's time for {song}</h1>}
        </MyContext.Consumer>
    )
}

export default Song;
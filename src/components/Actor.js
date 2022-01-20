import React, {useContext} from "react";
import {MyContext} from "../components/MyContext";
import Blonde from "./Blonde";
import Movie from './Movie'


export const Actor = () => {
    const title = useContext(MyContext);
    const actor = title.slice(9,10);
    const newTitle = actor-1 ;
    return(
        <>
        <MyContext.Consumer>
            { value => <div>
            <h1>I like Angela Pamela Sandra and Rita that's only {newTitle}</h1>
             <Movie value={MyContext}/>
             </div> }
        </MyContext.Consumer>
        
         </>
    )
}


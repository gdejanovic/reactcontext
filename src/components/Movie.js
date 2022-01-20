import { MyContext } from "./MyContext";
import { useContext } from "react";

export default function Movie  () {
    const msg = useContext(MyContext);
    return(
        <h2>Yolo {msg}</h2>
    )
}
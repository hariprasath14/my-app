import { useEffect, useState } from "react";
import "../../scss/test.scss";
import db from "../firebase/firebase";
const TestFirebse = () => {
    const [onLight, setonLight] = useState(false);
    // useEffect(() => {
    //     // db
    // }, []);
    return ( 
        <div className="test-container d-flex align-items-center justify-content-center flex-column">
            Test firebase
            <br/>
            <br/>
             <h3>Light: {onLight?"ON":"OFF"}</h3>
            <br/>
            <br/>
            <input style={{cursor:"pointer",width:"200px",height:"200px"}}  type="checkbox" onClick={()=>{setonLight(!onLight)}}/>
        </div> 
    );
}
 
export default TestFirebse;
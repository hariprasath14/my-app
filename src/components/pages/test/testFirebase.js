import { useEffect, useState } from "react";
import "../../scss/test.scss";
// import {ref,db,onValue,get,set} from "../firebase/firebase";
const TestFirebse = () => {
    // const [onLight, setonLight] = useState(false);
    const push = (e) => {
    //    set(ref(db, 'light'), e.target.checked);
    }
    const pull = () => {
        // var getLight = ref(db, 'light')
        // onValue(getLight, (snapshot) => {
        //     const data = snapshot.val();
        //     setonLight(data)
        // });
    }
      
    return ( 
        <div className="test-container d-flex align-items-center justify-content-center flex-column">
            Test firebase
            <br/>
            <br/>
             <h3>Light: {onLight?"ON":"OFF"}</h3>
            <br/>
            <br/>
            <input style={{cursor:"pointer",width:"200px",height:"200px"}}  type="checkbox" onClick={(e)=>{push(e);}}/>

            <br/>
            <br/>
            <button onClick={()=>{pull()}}>Pull</button>
        </div> 
    );
}
 
export default TestFirebse;
import React from "react"
import ButtonDisplay from "./Button/ButtonDisplay"

const App=()=>{
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Hello World</h1>
            <p> I am supporting you</p>
            <ButtonDisplay/>
        </div>
    )
}
// export const Hello1=()=>{
//     return(
//         <div>
//             <h1 style={{textAlign: "center"}}>Hello World</h1>
//             <p> I am supporting you</p>
//             <button className="button">Apple</button>
//             <button className="button">Orange</button>
//             <button className="button">Gauva</button>
//         </div>
//     )
// }

export default App
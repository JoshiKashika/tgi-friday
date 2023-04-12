import * as React from "react";


// type section ={
//     c_storeDescription : object;
    
// }
export const Details = (props:any) =>{
    console.log(props, "props")
    
    return(
        <>
         
        <div>
            
        <h1> Detail Section </h1>
        <div> {props.hello ? props.hello : "Descriptions"} </div>
   
        </div>
        </>
    )

}
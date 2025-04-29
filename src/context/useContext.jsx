import { createContext,useContext } from "react";

export let AuthContext = createContext();

export let AuthProvider = ({children})=>{

    let obj={
        name:"ayush",
        roll: "web dev"
    }
return (<AuthContext.Provider value={{obj}}>
{children}
</AuthContext.Provider>)
}



export let usedata= ()=>{
    let AuthContextValue=useContext(AuthContext); 
    if(!AuthContext){
        throw new Error("user auth outside of the provider");
        
    }else{

        return AuthContextValue;
    }
}

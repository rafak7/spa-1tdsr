import { createElement } from "react";

export default function Cabecalho(props){

    return(
        <>
            <header>
                <h1>Vite + React / Coded By - os bico tao se perguntando</h1>
                {/*Recuperar prop.children de Lista */}
                
                <ul>
                {
                    props.children.map((item, index) =>{ 
                        createElement("li", {key: index}, item);
                        return item;
                    })
                    
                }
                </ul>
                
            </header>
        </>
    )
}

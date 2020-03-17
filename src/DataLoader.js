import React, {useState, useEffect} from "react";
import useFetch from "./useFetch";

export default function DataLoader(props){

    const data = useFetch("http://jsonplaceholder.typicode.com/users")

    return(
        <div>
            <ul>
                {data.map (el => (
                    <li key={el.id}>{el.name}</li>
                ))}
            </ul>
        </div>
    )
}
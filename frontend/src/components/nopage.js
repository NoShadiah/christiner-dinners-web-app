import React from "react";
import {Link} from'react-router-dom';

export function NoPage(){
    return(
        <>
            <p>Sorry the page is not found 404</p>
            <Link to='/'>Click here to return home</Link>
        </>
    )
}
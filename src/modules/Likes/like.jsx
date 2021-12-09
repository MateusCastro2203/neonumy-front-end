import React, { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import {FcLike} from 'react-icons/fc'
export const Like = () =>{

    const [like, setLike] = useState(2);
    

    return(
        <>
            <ButtonGroup onClick={(()=> setLike(like+1))}><label><FcLike style={{height:30}}/> Likes {like}</label></ButtonGroup>
        </>
    )

}
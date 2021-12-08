import React from "react";

export const CommentsList = ({list=[]}) => {
    
    return(
        <>
            {list.map((comment)=>(
                <>
                <br />
                <text>{comment}</text>
                <br />
                </>
            ))}
        </>
    )
} 
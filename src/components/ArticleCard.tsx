import React from "react";
import { ArticleState, useArticle, useCounter } from "../storeZustand/CounterStore";

export const ArticleCard:React.FC<ArticleState> = ()=>{
    const {articleName, articleImage, articlePrice, articleDescription} = useArticle();
    return <>
        <div className="articleCard">
            <h2>{articleName ? articleName: "default name"}</h2>
            <img src={articleImage} alt="image" style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover'
            }}/>
            <p >{articlePrice}</p>
            <hr />
            <p>{articleDescription}</p>
            <button>Acheter</button>
        </div>
    </>
}
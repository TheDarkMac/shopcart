export function ArticleCard({articleName ,articleImage, articleDescription, articlePrice}:{
articleName: string,
articleImage: string,
articleDescription: string,
articlePrice: number;
}){
    return <>
        <div className="articleCard">
            <h2>{articleName}</h2>
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
import { ArticleList } from "./ArticleList"

export function Cart(){
    return <>
        <div>
            <h2>Panier</h2>
            <ul>
                <ArticleList articleName=""/>
            </ul>
            <p>Total : 0���</p>
            <button>Valider le panier</button>
        </div>
    </>
}
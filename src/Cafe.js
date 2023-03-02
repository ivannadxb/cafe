function Cafe ({itemsForSale}) {
    
    return (<div className="products">
{itemsForSale.map(( element => {
const {id, name, searchTerm, price, image} = element;
return (
    <div className="product-card" key={id}>
<img src={image} className="coffee" width="300px" height="350px" alt="img" />
<div className="product-info">
    <h3 className="product-info"> {name}</h3>
    <h4 className="product-info"> {searchTerm}</h4>
    <h4 className="product-info"> $ {price}</h4>
    </div>
    </div>
)
}))}
    </div>)
}

export default Cafe;
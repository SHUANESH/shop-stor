import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const SingleProduct = products?.map((pro)=>{
        return <div className="four column wide" key={pro.id}>
            <Link to={`/product${pro.id}`}>
        <div className="ui link cards">
            <div className="card">
                <div className="image"><img src={pro.image} alt={pro.title}/></div>
                   <div className="content">
                      <div className="header">{pro.title}</div>
                      <div className="meta price">$ {pro.price}</div>
                      <div className="meta">{pro.category}</div>
                    </div>
           </div>
        </div>
        </Link>
     </div>
    })
    return (
       <div>
          {SingleProduct}
       </div>
    )
}

export default ProductComponent;

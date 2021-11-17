import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from '../Features/Header';
import ProductDetail from './ProductDetail';
import ProductListing from './ProductListing';
const Routing = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={ProductListing} />
                <Route path="/product:productId" exact component={ProductDetail} />
                <Route>404 Not Found</Route>
            </Switch>
        </div>
    )
}

export default Routing

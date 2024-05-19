import PropTypes from 'prop-types';
import '../styles/Basket.css';
import Payment from './Payment';

function Basket({ boughtProducts, totalSpentMoney }) {
    return (
        <div className="basket-content">
            <h2>Basket</h2>
            <div>
                <h3>Bought Products:</h3>
                <ul>
                    {boughtProducts.map(product => (
                        <div key={product.name}>
                            <li>{product.name} - {product.price}</li>
                        </div>
                    ))}
                </ul>
            </div>
            <Payment totalSpentMoney={totalSpentMoney}/>
        </div>
    );
}

Basket.propTypes = {
    boughtProducts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired,
    totalSpentMoney: PropTypes.number.isRequired
};

export default Basket;

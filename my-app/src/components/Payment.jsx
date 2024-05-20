// Payment.jsx
import axios from 'axios';
import PropTypes from 'prop-types'; // Importing prop-types library
import '../styles/Basket.css';

function Payment({ totalSpentMoney }) {

    const payForProducts = async () => {
        const response = await axios.post("http://localhost:8080/api/payForProducts", { valueToPay: parseFloat(totalSpentMoney) });
        console.log(response.data);
        if (response.data === true) {
            alert("Thanks for shopping");
        } else {
            alert("You haven't got enough money");
        }
    }

    return (
        <div className="summery">
            <h3>Total Spent Money:</h3>
            <p>{totalSpentMoney}</p>
            <button onClick={payForProducts} id="pay-button"> Pay </button>
        </div>
    );
}

Payment.propTypes = {
    totalSpentMoney: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default Payment;

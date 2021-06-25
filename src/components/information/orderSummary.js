import React, { Component } from 'react';

import { UnderlinedTitle, InfoTitle } from './infoHelp';
import { connect } from 'react-redux';

class OrderSummary extends Component {
    render() {
        const { className } = this.props;
        let subtotal = 0.00;
        let tax = 1.16;
        let amountStickers = 0;
        this.props.cartProducts.map(cartProduct => {
            subtotal += cartProduct.quantity * cartProduct.product.price;
            amountStickers += cartProduct.quantity;
        })
        return (
            <div className={`${className} order-summary`}>
                <UnderlinedTitle className='order-summary__title' title='Order Summary' />
                <InfoTitle className='order-summary__subtotal' title={`${amountStickers} stickers`} value={`$${subtotal}`} />
                <InfoTitle className='order-summary__tax-shipping' title='Taxes & shipping' value={`$${((subtotal * tax) - subtotal).toFixed(2)}`} />
                <InfoTitle className='order-summary__total info-title-green' title='Total' value={`$${(subtotal * tax).toFixed(2)}`} />
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return {
        cartProducts
    }
}

OrderSummary = connect(mapStateToProps)(OrderSummary)

export default OrderSummary;
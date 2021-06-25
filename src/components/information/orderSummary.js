import React, { Component } from 'react';

import { UnderlinedTitle, InfoTitle } from './infoHelp';

class OrderSummary extends Component {
    render() {
        const { className } = this.props;
        return (
            <div classNme={`${className} order-summary`}>
                <UnderlinedTitle className='order-summary__title' title='Order Summar' />
                <InfoTitle className='order-summary__subtotal' title='4 stickers' value='$7.96' />
                <InfoTitle className='order-summary__tax-shipping' title='Taxes & shipping' value='$0.06' />
                <InfoTitle className='order-summary__total' title='4 stickers' value='$8.02' />
            </div>

        )
    }
}

export default OrderSummary;
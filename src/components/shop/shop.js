import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Shop',
                path: '/shop'
            },
            {
                _id: 1,
                title: 'Logout',
                path: '/'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();
        // set header links
        //fetch navbar links
        // set navbar links
        //filter products 
    }


    render() {
        return (
            <div className='shop'>
                {/* SHOP SEARCH BAR */}
                {/* SHOP BUTTON */}
                {/* SHOP CART */}
            </div>)
    }

}

function mapStateToProps(state) {
    return { state }
}

Shop = connect(mapStateToProps, actions)(Shop)

export default Shop;
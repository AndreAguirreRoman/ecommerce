import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 12.56,
                orderNumber: 'A002738972',
                orderDate: new Date(),
                creditCard: '-4049',
                user: {
                    name: 'Kaitlyn Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 82.02,
                orderNumber: 'A939328900',
                orderDate: new Date(),
                creditCard: '-4049',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 2,
                total: 9.02,
                orderNumber: 'A002836789',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Andre Aguirre',
                    shippingAddress: '42 Bruselas Street'
                }
            },
            {
                _id: 3,
                total: 82.02,
                orderNumber: 'A839292999',
                orderDate: new Date(),
                creditCard: '-1892',
                user: {
                    name: 'Carla Roman',
                    shippingAddress: '192 Sinaloa Street'
                }
            },
            {
                _id: 4,
                total: 88.02,
                orderNumber: 'A8383838390',
                orderDate: new Date(),
                creditCard: '-1384',
                user: {
                    name: 'Brian Ota',
                    shippingAddress: '42 Iwalani Street'
                }
            },
            {
                _id: 5,
                total: 20.32,
                orderNumber: 'A84489930',
                orderDate: new Date(),
                creditCard: '-8878',
                user: {
                    name: 'Jacelyn Imax',
                    shippingAddress: '489 Prince Kukio Street'
                }
            },
            {
                _id: 6,
                total: 1.02,
                orderNumber: 'A268903078',
                orderDate: new Date(),
                creditCard: '-4899',
                user: {
                    name: 'Alexia Ordaz',
                    shippingAddress: '9992 Palmira Street'
                }
            },
            {
                _id: 7,
                total: 82.02,
                orderNumber: 'A38383899',
                orderDate: new Date(),
                creditCard: '-8377',
                user: {
                    name: 'Cristhian Aguirre',
                    shippingAddress: '3888 Prado Vallejo Avenue'
                }
            }
        ]
    })
}

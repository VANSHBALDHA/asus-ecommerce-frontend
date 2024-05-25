import React from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import TableInvoices from './modules/TableInvoices';

export default function SaveCards() {
    const accountLinks = [
        {
            text: 'Account Information',
            url: '/account/user-information',
            icon: 'icon-user',
        },
        {
            text: 'Change Password',
            url: '/account/change-password',
            icon: 'icon-user',
        },
        {
            text: 'Manage Users',
            url: '/account/manage-users',
            icon: 'icon-user',
        },
        {
            text: 'Manage Orders',
            url: '/account/manage-orders',
            icon: 'icon-alarm-ringing',
        },
        {
            text: 'Save Cards',
            url: '/account/save-card',
            icon: 'icon-papers',
            active: true,
        },
        {
            text: 'Manage Address',
            url: '/account/addresses',
            icon: 'icon-map-marker',

        },
        {
            text: 'Wishlist',
            url: '/account/wishlist',
            icon: 'icon-heart',
        },
        {
            text: 'Manage Cart',
            url: '/account/shopping-cart',
            icon: 'icon-map-marker',
        },
        {
            text: 'Manage Quote',
            url: '/account/manage-quote',
            icon: 'icon-map-marker',
        },
        {
            text: 'Message Ticket',
            url: '/account/message-ticket',
            icon: 'icon-map-marker',
        },
    ];

    return (
        <section className="ps-my-account ps-page--account">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ps-page__left">
                            <AccountMenuSidebar data={accountLinks} />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ps-page__content">
                            <div className="ps-section--account-setting">
                                <div className="ps-section__header">
                                    <h3>Invoices</h3>
                                </div>
                                <div className="ps-section__content">
                                    <TableInvoices />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

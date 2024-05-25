import React from 'react';
import Link from 'next/link';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import ChangePassword from "./modules/ChangePassword"

const ChangeUserPassword = () => {
    const accountLinks = [
        {
            text: 'My Account',
            url: '/account/user-information',
            icon: 'icon-user',
        },
        {
            text: 'Change Password',
            url: '/account/change-password',
            icon: 'icon-user',
            active: true,
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

    //Views
    const accountLinkView = accountLinks.map((item) => (
        <li key={item.text} className={item.active ? 'active' : ''}>
            <Link href={item.url}>
                <i className={item.icon} />
                {item.text}
            </Link>
        </li>
    ));

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
                                    <h3>Change Password</h3>
                                </div>
                                <div className="ps-section__content">
                                    <ChangePassword />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChangeUserPassword;

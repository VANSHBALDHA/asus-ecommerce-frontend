import React from 'react';
import Link from 'next/link';
import FormChangeUserInformation from '~/components/shared/FormChangeUserInformation';

const UserInformation = () => {
    const accountLinks = [
        {
            text: 'My Account',
            url: '/account/user-information',
            icon: 'icon-user',
            active: true,
        },
        {
            text: 'Change Password',
            url: '/account/change-password',
            icon: 'icon-user',
        },
        {
            text: 'Manage Users',
            url: '/account/change-password',
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
                    <div className="col-lg-3">
                        <div className="ps-section__left">
                            <aside className="ps-widget--account-dashboard">
                                <div className="ps-widget__header">
                                    <img src="/static/img/users/3.jpg" />
                                    <figure>
                                        <figcaption>Hello</figcaption>
                                        <p>username@gmail.com</p>
                                    </figure>
                                </div>
                                <div className="ps-widget__content">
                                    <ul className="ps-list--user-links">
                                        {accountLinks.map((link) => (
                                            <li
                                                key={link.text}
                                                className={
                                                    link.active ? 'active' : ''
                                                }>
                                                <Link href={link.url}>
                                                    <i className={link.icon} />
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <Link href="/account/my-account">
                                                <i className="icon-power-switch" />
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="ps-page__content">
                            <FormChangeUserInformation />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserInformation;

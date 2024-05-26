import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { userChangeIsLoggedIn } from '~/redux/features/userSlide';
import { Dropdown, Menu, Modal } from 'antd';
import "./index.css"
import { useRouter } from 'next/navigation';

const accountLinks = [
    {
        text: 'Account Information',
        url: '/account/user-information',
    },
    {
        text: 'Notifications',
        url: '/account/notifications',
    },
    {
        text: 'Invoices',
        url: '/account/invoices',
    },
    {
        text: 'Address',
        url: '/account/addresses',
    },
    {
        text: 'Recent Viewed Product',
        url: '/account/recent-viewed-product',
    },
    {
        text: 'Wishlist',
        url: '/account/wishlist',
    },
];

const AccountQuickLinks = (props) => {
    const router = useRouter()

    const handleRegisterMenuClick = (e) => {
        if (e.key == "gst") {
            console.log('Selected key:', e.key);
            router.push("/register/gst-company")
        } else if (e.key == "corporate") {
            router.push("/register/corporate-company")
        } else {
            router.push("/register/non-gst-company")
        }
    };

    const handleLoginMenuClick = (e) => {
        if (e.key == "gst") {
            router.push("/login/gst-company")
        } else if (e.key == "corporate") {
            router.push("/login/corporate-company")
        } else {
            router.push("/login/non-gst-company")
        }
    };

    const RegisterMenu = (
        <Menu onClick={handleRegisterMenuClick}>
            <Menu.Item key="gst">GST</Menu.Item>
            <Menu.Item key="non-gst">Non-GST</Menu.Item>
            <Menu.Item key="corporate">Corporate</Menu.Item>
        </Menu>
    );

    const LoginMenu = (
        <Menu onClick={handleLoginMenuClick}>
            <Menu.Item key="gst">GST</Menu.Item>
            <Menu.Item key="non-gst">Non-GST</Menu.Item>
            <Menu.Item key="corporate">Corporate</Menu.Item>
        </Menu>
    );

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(userChangeIsLoggedIn(false));
    };

    const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);

    const linksView = accountLinks.map((item) => (
        <li key={item.text}>
            <Link href={item.url}>{item.text}</Link>
        </li>
    ));

    if (isLoggedIn === true) {
        return (
            <div className="ps-block--user-account">
                <i className="icon-user" />
                <div className="ps-block__content">
                    <ul className="ps-list--arrow">
                        {linksView}
                        <li className="ps-block__footer">
                            <a href="#" onClick={(e) => handleLogout(e)}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <div className='ps-block--user-header'>
                    <div className="ps-block__left">
                        <i className="icon-user" />
                    </div>
                    <div className="ps-block__right login_header_dropdown">
                        <Dropdown overlay={LoginMenu} trigger={['hover']}>
                            <span className="ant-dropdown-link">
                                Login
                            </span>
                        </Dropdown>
                        <Dropdown overlay={RegisterMenu} trigger={['hover']}>
                            <span className="ant-dropdown-link">
                                Register
                            </span>
                        </Dropdown>
                    </div>
                </div>

            </>
        );
    }
};

export default AccountQuickLinks;

'use client';
import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ManageOrders from '~/components/partials/account/ManageOrders';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';

export default function Page() {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Manage Orders',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Manage Orders">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <ManageOrders />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
}

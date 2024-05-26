'use client';
import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import Shipping from '~/components/partials/account/Shipping';

export default function Page() {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shipping',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="FAQ page">
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <Shipping />
                </div>
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
}

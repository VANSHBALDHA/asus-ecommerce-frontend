'use client';
import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import Affiliate from '~/components/partials/page/Affilate';

export default function Page() {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Affilate',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="FAQ page">
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <Affiliate />
                </div>
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
}

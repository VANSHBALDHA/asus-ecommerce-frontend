'use client';
import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import Career from '~/components/partials/page/Career';

export default function Page() {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Career',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="FAQ page">
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <Career />
                </div>
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
}

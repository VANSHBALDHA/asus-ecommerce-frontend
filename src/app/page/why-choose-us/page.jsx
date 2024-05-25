'use client';
import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Policy from '~/components/partials/page/Policy';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import WhyChooseUs from '~/components/partials/page/WhyChooseUs';

export default function Page() {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Why Choose us?',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="FAQ page">
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <WhyChooseUs />
                </div>
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
}

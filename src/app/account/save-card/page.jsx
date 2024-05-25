'use client';
import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import PageContainer from '~/components/layouts/PageContainer';
import SaveCards from '~/components/partials/account/SaveCards';

export default function Page() {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Save Card',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Invoices">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <SaveCards />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
}

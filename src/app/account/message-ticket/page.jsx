'use client';
import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import MessageTicket from '~/components/partials/account/MessageTicket';

export default function Page() {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Manage Ticket',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Manage Orders">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <MessageTicket />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
}

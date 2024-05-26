import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import ReturnPolicy from '~/components/partials/page/ReturnPolicy';

const page = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Return policy',
        },
    ];
    return (
        <PageContainer footer={<FooterDefault />} title="FAQ page">
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <ReturnPolicy />
                </div>
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default page;

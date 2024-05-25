import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import Terms from '~/components/partials/page/terms';

const page = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Terms & Conditions',
        },
    ];
    return (
        <div>
            <PageContainer footer={<FooterDefault />} title="FAQ page">
                <div className="ps-page--single">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <div className="container">
                        <Terms />
                    </div>
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </div>
    );
};

export default page;

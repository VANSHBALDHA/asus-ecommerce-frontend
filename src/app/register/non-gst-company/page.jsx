'use client';
import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from "~/components/partials/commons/Newletters"
import NonGstCompanyRegister from '~/components/shared/auth/register/NonGstCompany';


export default function LoginPage() {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Non-GST company register',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Login">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <NonGstCompanyRegister />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
}

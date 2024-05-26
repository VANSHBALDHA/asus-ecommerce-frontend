'use client';
import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from "~/components/partials/commons/Newletters"
import GstCompanyLogin from '~/components/shared/auth/login/GstCompanyLogin';
import NonGstCompanyLogin from '~/components/shared/auth/login/NonGstCompanyLogin';


export default function LoginPage() {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Non-GST company login',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Login">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <NonGstCompanyLogin />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
}

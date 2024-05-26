'use client';
import React, { useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import useGetProducts from '~/hooks/useGetProducts';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderMobileProduct from '~/components/shared/header-mobile/HeaderMobileProduct';
import HeaderProduct from '~/components/shared/headers/HeaderProduct';
import PageContainer from '~/components/layouts/PageContainer';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductWidgets from '~/components/partials/product/ProductWidgets';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import Newletters from '~/components/partials/commons/Newletters';


const ProductDefaultPage = () => {
    const params = useParams();
    const { pid } = params;
    const { loading, getStrapiProduct, product } = useGetProducts();

    useEffect(() => {
        getStrapiProduct(pid);
    }, [pid]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/shop',
        },
        {
            text: product?.attributes.title || 'Untitled Product',
        },
    ];

    const productDetails = useMemo(() => {
        if (loading) {
            return <SkeletonProductDetail />;
        }
        else {
            return <ProductDetailFullwidth product={product} />;
        }
    }, [loading, product]);

    const headerView = useMemo(() => {
        if (loading) {
            return (
                <>
                    <HeaderDefault />
                    <HeaderMobileProduct />
                </>
            );
        }
        if (product) {
            return (
                <>
                    <HeaderProduct product={product} />
                    <HeaderMobileProduct />
                </>
            );
        } else {
            return (
                <>
                    <HeaderDefault />
                    <HeaderMobileProduct />
                </>
            );
        }
    }, [loading, product]);

    return (
        <PageContainer
            header={headerView}
            title={product?.attributes.title || 'Untitled Product'}>
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page__left">{productDetails}</div>
                        <div className="ps-page__right">
                            <ProductWidgets />
                        </div>
                    </div>
                    <RelatedProduct />
                </div>
            </div>
            <Newletters />
        </PageContainer>
    );
};

export default ProductDefaultPage;

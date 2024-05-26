// import React, { useMemo } from 'react';
// import Link from 'next/link';
// import Rating from '~/components/elements/Rating';

// const ModuleDetailTopInformation = ({ product }) => {
//     const { sale, sale_price, title, price, product_brand } =
//         product.attributes;

//     const productBrandName = useMemo(() => {
//         return product_brand?.length > 0 ? product_brand[0]?.name : 'No Brand';
//     }, [product_brand]);

//     const productPrice = useMemo(() => {
//         if (sale) {
//             return (
//                 <h4 className="ps-product__price sale">
//                     <del className="mr-2">
//                         ₹
//                         {price.toLocaleString('en-US', {
//                             minimumFractionDigits: 2,
//                         })}
//                     </del>
//                     $
//                     {sale_price.toLocaleString('en-US', {
//                         minimumFractionDigits: 2,
//                     })}
//                 </h4>
//             );
//         } else {
//             return (
//                 <h4 className="ps-product__price">
//                     ₹
//                     {price.toLocaleString('en-US', {
//                         minimumFractionDigits: 2,
//                     })}
//                 </h4>
//             );
//         }
//     }, [sale, price]);

//     const productTitle = useMemo(() => {
//         return title || 'Untitled Product';
//     }, [title]);

//     return (
//         <header>
//             <h1>{productTitle}</h1>
//             <div className="ps-product__meta">
//                 <p>
//                     Brand:
//                     <Link href={'/shop'} className="ml-2 text-capitalize">
//                         {productBrandName}
//                     </Link>
//                 </p>
//                 {/* <div className="ps-product__rating">
//                     <Rating />
//                     <span>(1 review)</span>
//                 </div> */}
//             </div>
//             {productPrice}
//         </header>
//     );
// };

// export default ModuleDetailTopInformation;


import React from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';

const ModuleDetailTopInformation = () => {
    // Static information
    const staticBrandName = 'Young Shop';
    const staticPrice = 999.99;
    const staticSalePrice = 799.99;
    const staticTitle = 'Apple Macbook Retina Display 12';
    const isOnSale = true; // Change to false if the product is not on sale

    const productPrice = isOnSale ? (
        <h4 className="ps-product__price sale">
            <del className="mr-2">
                ₹
                {staticPrice.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                })}
            </del>
            ₹
            {staticSalePrice.toLocaleString('en-US', {
                minimumFractionDigits: 2,
            })}
        </h4>
    ) : (
        <h4 className="ps-product__price">
            ₹
            {staticPrice.toLocaleString('en-US', {
                minimumFractionDigits: 2,
            })}
        </h4>
    );

    return (
        <header>
            <h1>{staticTitle}</h1>
            <div className="ps-product__meta">
                <p>
                    Brand:
                    <Link href={'/shop'} className="ml-2 text-capitalize">
                        {staticBrandName}
                    </Link>
                </p>
                {/* <div className="ps-product__rating">
                    <Rating />
                    <span>(1 review)</span>
                </div> */}
            </div>
            {productPrice}
        </header>
    );
};

export default ModuleDetailTopInformation;

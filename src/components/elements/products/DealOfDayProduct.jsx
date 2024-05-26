// import React, { useMemo } from 'react';
// import Link from 'next/link';
// import Rating from '../Rating';
// import { formatCurrency } from '~/utilities/product-helper';
// import ProductActions from '~/components/elements/products/modules/ProductActions';
// import ProductProgressbar from '~/components/elements/products/modules/ProductProgressbar';
// import useProduct from '~/hooks/useProduct';

// const DealOfDayProduct = ({ product }) => {
//     const { thumbnailImage, badge, title } = useProduct(
//         product.attributes,
//         product.id
//     );
//     // const { price, sale_price, is_sale } = product.attributes;

//     const extendedPrice = <p className="ps-product__price sale">
//         ${formatCurrency("18200")}
//         <del className="ml-2">₹{formatCurrency("15000")}</del>
//         <small>18% off</small>
//     </p>

//     return (
//         <div className="ps-product ps-product--inner">
//             <div className="ps-product__thumbnail">
//                 <Link href={'/product/[pid]'} as={`/product/${product.id}`}>
//                     {thumbnailImage}
//                 </Link>
//                 {/* {badge(product)} */}
//                 <ProductActions product={product} />
//             </div>
//             <div className="ps-product__container">
//                 <Link href={'/shop'} className="ps-product__vendor">
//                     Young Shop
//                 </Link>
//                 <div className="ps-product__content">
//                     {extendedPrice}
//                     {title}
//                     <div className="ps-product__rating">
//                         {/* <Rating /> */}
//                         <span>{product.ratingCount}</span>
//                     </div>
//                     {/* <ProductProgressbar product={product} /> */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DealOfDayProduct;


import React from 'react';
import Link from 'next/link';
import Rating from '../Rating';
import ProductActions from '~/components/elements/products/modules/ProductActions';
import useProduct from '~/hooks/useProduct';

const DealOfDayProduct = () => {
    // Static product information
    const staticProductId = 1; // Replace with your static product ID
    const staticThumbnailImage = <img src="https://beta.apinouthemes.com/uploads/a85ac7daaa614747b209894c37a0bdbd.jpg" alt="Product Image" />; // Replace with your static image path
    const staticTitle = <span className="ps-product__title">Apple Macbook Retina Display 12</span>; // Replace with your static title
    const staticPrice = 1820;
    const staticSalePrice = 1500;
    const staticDiscount = 18; // Static discount percentage
    const staticVendor = "Young Shop";

    const extendedPrice = (
        <p className="ps-product__price sale">
            ₹{staticPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            <del className="ml-2">₹{staticSalePrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</del>
            <small>{staticDiscount}% off</small>
        </p>
    );

    return (
        <div className="ps-product ps-product--inner">
            <div className="ps-product__thumbnail">
                <Link href="/productdetails" as="/productdetails">
                    {staticThumbnailImage}
                </Link>
                <ProductActions product={{ id: staticProductId }} />
            </div>
            <div className="ps-product__container">
                <Link href={'/productdetails'} className="ps-product__vendor">
                    {staticVendor}
                </Link>
                <div className="ps-product__content">
                    {extendedPrice}
                    {staticTitle}
                    {/* <div className="ps-product__rating">
                        <Rating />
                        <span>{staticRatingCount}</span>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default DealOfDayProduct;

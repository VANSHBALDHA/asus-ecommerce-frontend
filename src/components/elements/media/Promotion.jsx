import React from 'react';
import Link from 'next/link';

const Promotion = ({ link }) => {
    return (
        <>
            <Link href={link} className="ps-collection">
                <img src="https://beta.apinouthemes.com/uploads/promotion_1_d6deb591f0.jpeg" alt="martfury" />
            </Link>
            <Link href={link} className="ps-collection">
                <img src="https://beta.apinouthemes.com/uploads/promotion_2_d252453586.jpeg" alt="martfury" />
            </Link>
        </>

    );
};

export default Promotion;

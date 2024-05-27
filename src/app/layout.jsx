import React from 'react';

import '~/public/static/fonts/Linearicons/Font/demo-files/demo.css';
import '~/public/static/fonts/font-awesome/css/font-awesome.min.css';
import '~/public/static/css/bootstrap.min.css';
import '~/public/static/css/slick.min.css';
import '~/scss/style.scss';
import '~/scss/home-default.scss';

import getHeadData, {
    generatePageMetadata,
} from '~/utilities/seo/RoutePathsSEO';

export const metadata = generatePageMetadata(getHeadData('/'));
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            </head>
            <body style={{ fontFamily: 'Work Sans, sans-serif' }}>{children}</body>
        </html >
    );
}

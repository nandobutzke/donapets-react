import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />

                <link rel="shortcut icon" href="../../public/img/cat.svg" type="image/x-icon" />
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto:wght@100;400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
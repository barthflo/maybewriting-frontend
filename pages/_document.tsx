import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Mr+Bedfort&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Galada&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Viaoda+Libre&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
                    <meta name='theme-color' content='#F2EFE2' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
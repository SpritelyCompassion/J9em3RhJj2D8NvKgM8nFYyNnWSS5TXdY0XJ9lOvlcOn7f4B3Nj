import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-gray-black);\n    background-color: var(--dl-color-gray-white);\n    \n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="stylesheet"
            href="https://download1591.mediafire.com/yruvpyt6pyxgtw5AU0_fhILoploHhFZR0ZOrr8atIw18T5-HvMEEX98oLwgFSZ8NneAK6fGi1MKzrWlK0EDXpKsqFVuviWaTHrkknxiMxebQ8hM9T9TEr956MpiW3d0XPL4w2jdY33EwcY_5N4P3uSfg-tOKo62xJauY4_dAoybixw/kvj30d7mtx5z7n5/kiszhdutvfc.css"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://download1532.mediafire.com/s6dc9oaa16sgHTp2waMEToaHZexp7Y2moZI7TMZE0DzR0gBh5yGqqkED5fMMCvB14cwENrdAHwZg49krDupvRusaycyb6VYro-DJHUEwBaQD-xlGCxZzl1A-leWayS3yyqgOa6r-5l8_mZQhP61QJsB_wceP-urhpIH1XxlgzVCT0A/d76p8fpbsftl3i8/xkjgbcfhwevgyfhr.css"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://download1979.mediafire.com/myi1b10i747gfWo24lvT_Z2WRPQ1Q2xR__1-jWTQx47xYPxGxgpC3HSYMFr3ibnViH-U-yJ5jq5tj0VUK1InNr5hHUit5_sTNNZ-_En-wwuU1JY41O-CpC-D8qVq0xkgp2PDsxRolWIBDEJBkDTcae13PCBuV1a541uAAH8pCk4JFQ/8fu445q28mcvf45/kdjhbgvfevhb.css"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            data-tag="font"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    )
  }
}
export default CustomDocument

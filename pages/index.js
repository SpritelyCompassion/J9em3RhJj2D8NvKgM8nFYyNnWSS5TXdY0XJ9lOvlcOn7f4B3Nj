import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Muddy Sniveling Mallard</title>
          <meta property="og:title" content="Muddy Sniveling Mallard" />
        </Head>
        <div className="home-container1">
          <span className="home-text">Living in harmony.</span>
        </div>
        <div className="home-container2">
          <span className="home-text1">Organisations in Planning</span>
          <div className="home-container3">
            <img
              alt="image"
              src="/playground_assets/xdfghjkjhgf.svg"
              className="home-image"
            />
            <img
              alt="image"
              src="/playground_assets/cgvhbjnkmn.svg"
              className="home-image1"
            />
            <img
              alt="image"
              src="/playground_assets/fccgvhbjnkm.svg"
              className="home-image2"
            />
            <img
              alt="image"
              src="/playground_assets/cfcghjk.svg"
              className="home-image3"
            />
            <img
              alt="image"
              src="/playground_assets/ghjkm.svg"
              className="home-image4"
            />
            <img
              alt="image"
              src="/playground_assets/gfhjkl.svg"
              className="home-image5"
            />
          </div>
        </div>
        <div className="home-container4">
          <span className="home-text2">
            Additional organisations planed, remaining possible.
          </span>
          <img
            src="/playground_assets/sdjcnzsjdvn.svg"
            alt="image"
            className="home-image6"
          />
        </div>
        <div className="home-container5">
          <a
            href="mailto:livinginharmoney@protonmail.com?subject=Hello, I am interested in joining forces with Living in Harmony organization."
            className="home-link"
          >
            livinginharmoney@protonmail.com
          </a>
          <span className="home-text3">or</span>
          <a
            href="https://matrix.to/#/@.gdwill88:matrix.org"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            https://matrix.to/#/@.gdwill88:matrix.org
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: 61.5vh;
            justify-content: center;
            background-image: url('/playground_assets/asnjansw.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-text {
            font-size: 10vh;
            align-self: center;
            font-style: normal;
            font-family: Circular Std Bold;
            font-weight: 400;
          }
          .home-container2 {
            gap: 12.5vh;
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text1 {
            font-size: 4vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
          }
          .home-container3 {
            gap: 12.5vh;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-image {
            width: 10.56375vh;
            height: 11.12375vh;
            object-fit: cover;
          }
          .home-image1 {
            width: 12.875vh;
            height: 12.875vh;
            object-fit: cover;
          }
          .home-image2 {
            width: 14.36vh;
            height: 13.71875vh;
            object-fit: cover;
          }
          .home-image3 {
            width: 9.38vh;
            height: 8.95875vh;
            object-fit: cover;
          }
          .home-image4 {
            width: 10.5vh;
            height: 10.5vh;
            object-fit: cover;
          }
          .home-image5 {
            width: 18.5vh;
            height: 12.125vh;
            object-fit: cover;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/bdinahg.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-text2 {
            z-index: 2;
            font-size: 4vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
          }
          .home-image6 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 52.5vh;
            bottom: 0px;
            height: 52.5vh;
            margin: auto;
            z-index: 0;
            position: absolute;
            object-fit: cover;
            user-select: none;
            -ms-user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
          }
          .home-container5 {
            gap: 2.5vh;
            flex: 0 0 auto;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-link {
            font-size: 4vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            text-decoration: none;
          }
          .home-text3 {
            font-size: 4vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
          }
          .home-link1 {
            font-size: 4vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Home

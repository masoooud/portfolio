import * as React from "react"
import Layout from "components/layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

const ParallaxPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1 className="heroText">HI, I'M</h1>
    <h1 className="heroText">MASOUD MOHARRAMI</h1> */}

    <div class="parallax">
      <div class="text">
        This div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
    </div>

    <div class="parallax2"></div>

    <div class="parallax3"></div>
    <style jsx>
      {`
        .parallax {
          /* The image used */
          background-image: url("../../images/img_parallax.jpg");
          /* Full height */
          height: 50vh;
          /* Create the parallax scrolling effect */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          .text {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 36px;
            mix-blend-mode: screen;
          }
        }

        .parallax2 {
          /* The image used */
          background-image: url("../../images/img_parallax2.jpg");
          /* Full height */
          height: 50vh;
          /* Create the parallax scrolling effect */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .parallax3 {
          /* The image used */
          background-image: url("../../images/img_parallax3.jpg");
          /* Full height */
          height: 50vh;
          /* Create the parallax scrolling effect */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}
    </style>
  </Layout>
)

export default ParallaxPage

import React from "react";
import Gallery from "../images/gallery_1.jpg";
import Gallery_2 from "../images/gallery_2.jpg";
import Gallery_4 from "../images/gallery_4.png";
import Gallery_5 from "../images/gallery_5.png";

function createPaddingStyle(leftPadding, rightPadding) {
  return {
    paddingLeft: leftPadding,
    paddingRight: rightPadding,
  };
}


const GalleryPage = () => {
  return (
    <div className="container mb-3">
      <div className="row mt-5 m-mt-2">
        <div className="col-lg-7">
          {/* left big rect */}
          <div className="row mt-5">
            <h1>Gallery </h1>
          </div>
          <div className="row mt-3 ">
            <div className="col-lg-5">
              <img
                src={Gallery}
                alt="prop"
                className=" cursor-pointer"
                style={{ width: "300px", height: "500px" }}
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
            <div className="col-lg-7 text-start d-flex justify-content-center p-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus vel enim consequuntur, recusandae, numquam sequi neque
              explicabo accusamus saepe adipisci voluptatum ratione ea repellat
              quo consectetur accusantium natus. Laboriosam, adipisci.
            </div>
          </div>
          <p className="text-start d-flex justify-content-center p-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            dolorum aut earum, tempora odit atque vitae esse dolorem aspernatur
            ut eum vel inventore mollitia eligendi officia quos neque molestias
            ipsum.
          </p>
        </div>
        <div className="col-lg-5 " style={{ marginLeft: "-1.5rem" }}>
          {/* {Right big rect } */}

          <div class="container mt-5">
            <div
              style={{
                ...createPaddingStyle("7rem", "7rem"),
                marginBottom: "-3.5rem",
              }}
            >
              <img
                src={Gallery_2}
                alt="prop"
                class="img-fluid position-relative"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>

            <div
              style={{
                ...createPaddingStyle("15rem", "2rem"),
                marginBottom: "-4rem",
              }}
            >
              <img
                src={Gallery_5}
                alt="prop"
                class="img-fluid position-relative"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>

            <div style={{ ...createPaddingStyle("1rem", "13rem") }}>
              <img
                src={Gallery_4}
                alt="prop"
                class="img-fluid position-relative"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;

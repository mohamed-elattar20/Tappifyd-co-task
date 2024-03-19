// import { img1 } from "./assets/imgs/Explorer-644x750";
// import { img2 } from "./assets/imgs/sphere-white";
import { motion } from "framer-motion";
import "./Task.css";

const Task = () => {
  return (
    <>
      <div>
        <div className="container my-5">
          <div style={{ margin: "150px 0 900px 0" }} className="row">
            <div style={{ left: "0" }} className="col-sm-12 col-md-12 col-lg-6">
              <div className="position-relative">
                <figure className="position-relative ">
                  <motion.img
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      transform: "translate(0 , 0)",
                    }}
                    style={{
                      height: "600px",
                      borderRadius: "38%",
                      top: "50px",
                      // opacity: "0",
                      // scale: "0",
                      transform: "translate(0px , 50px) scale(0)",
                      transition: ".3s all",
                    }}
                    className="position-absolute"
                    // src={img1}
                    src={"../public/Explorer-644x750.jpg"}
                    alt=""
                  />
                  <motion.img
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      transform: "translate(0 , 0)",
                    }}
                    style={{
                      height: "250px",
                      top: "0",
                      right: "0",
                      zIndex: "-1",
                      transform: "translate(0px , 50px) scale(0)",
                      transition: ".3s all",
                    }}
                    className="position-absolute"
                    // src={img2}
                    src={"../public/sphere-white.png"}
                    alt=""
                  />
                </figure>
                <motion.div
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transform: "translate(0 , 0)",
                  }}
                  style={{
                    height: "250px",
                    top: "0",
                    right: "0",
                    zIndex: "-1",
                    transform: "translate(0px , 50px) ",
                    // scale: "0",
                    transition: ".5s all",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#0b2545",
                      fontWeight: "400",
                      padding: "15px 27px",
                      // marginBott: "30px",
                      width: "230px",

                      color: "white",
                      zIndex: "10",
                      position: "absolute",
                      borderRadius: "10px",
                      right: "5%",
                      top: "150px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>CUSTOMERS GIVE US AN</p>
                    <h3 style={{ fontSize: "36px", color: "#f4acb7" }}>8.8</h3>
                    <p style={{ fontSize: "12px" }}>OUT OF 10</p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#0b2545",
                      fontWeight: "400",
                      padding: "15px 27px",
                      width: "230px",
                      color: "white",
                      zIndex: "10",
                      position: "absolute",
                      borderRadius: "10px",
                      right: "5%",
                      top: "320px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>MORE THAN</p>
                    <h3 style={{ fontSize: "36px", color: "#f4acb7" }}>
                      $ 12 mil.
                    </h3>
                    <p style={{ fontSize: "12px" }}>OUT OF 10</p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#0b2545",
                      fontWeight: "400",
                      padding: "15px 27px",
                      // marginBott: "30px",
                      width: "230px",
                      color: "white",
                      zIndex: "10",
                      position: "absolute",
                      borderRadius: "10px",
                      right: "5%",
                      top: "490px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>MORE THAN</p>
                    <h3 style={{ fontSize: "36px", color: "#f4acb7" }}>110</h3>
                    <p style={{ fontSize: "12px" }}>PROCESS IMPLEMENTATIONS</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              style={{ opacity: "0", transition: "3s all" }}
              whileInView={{ opacity: 1 }}
              className="col-sm-12 col-md-12 col-lg-6  p-2"
            >
              <p
                style={{
                  backgroundColor: "#0b2545",
                  fontWeight: "400",
                  padding: "9px 20px",
                  marginBott: "30px",
                }}
                className="rounded-pill  d-inline-block text-light px-4 py-1"
              >
                About us
              </p>
              <h2
                style={{
                  maxWidth: "60%",
                  color: "#0b2545",
                  fontSize: "50px",
                  marginBottom: "40px",
                  lineHeight: "1.15",
                  fontWeight: "700",
                }}
              >
                We reveal and fix invisible process inefficiencies{" "}
              </h2>
              <p
                style={{
                  maxWidth: "80%",
                  color: "#0b2545",
                  marginBottom: "40px",
                  lineHeight: "32px",
                  fontSize: "20px",
                }}
              >
                Organisations run their processes through hundreds of
                IT-systems. This leaves space for many inefficiencies.
                Inefficiencies that hurt your business. Through process mining
                we identify and fix those inefficiencies. Apolix is your
                one-stop shop for process improvement.
              </p>
              <div className="d-flex gap-3">
                <button
                  style={{ backgroundColor: "#496ddb" }}
                  className="btn  fs-4 px-4 py-2 text-light hover-btn"
                >
                  More About us
                </button>
                <button
                  style={{ backgroundColor: "#0b2545" }}
                  className="btn  fs-4 px-4 py-3 text-light hover-btn"
                >
                  Careers
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;

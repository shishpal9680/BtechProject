import React, { useEffect, Component } from "react";
import { Row, Card, CardBody, Col } from "reactstrap";
import { HideOn } from "react-hide-on-scroll";
import Recommender from "./components/Recommender";
import Speech from "./components/Speech";
import "./css/home.css";
import Offerings from "./components/Offerings";
import Footer from "./components/Footer";
import Gesture from "./components/Gesture";

class Home extends Component {
  state = {
    showGestureWindow: false,
  };

  componentDidMount() {
    console.log(Gesture);
  }
  render() {
    return (
      <>
        <Row className="initial-row">
          <img src={require("./assets/banking-banner.jpg").default} alt="" />
          <HideOn atHeight height={500}>
            <div className="col-md-3 voice-control-options">
              <span className="btn btn-dark badge-pill btn-block ml-2 mt-4">
                Voice Navigation
              </span>

              <Speech
                op1="/retailBanking/CheckBalance"
                op2="/retailBanking/fundTransfer"
                op3="/loans"
              />

              <span
                className="btn btn-dark badge-pill btn-block ml-2 mt-4"
                onClick={() => {
                  this.setState({
                    showGestureWindow: !this.state.showGestureWindow,
                  });
                }}
              >
                Use Hand
              </span>

              <Recommender
                options={[
                  { value: "Check Balance" },
                  { value: "Fund transfer" },
                  { value: "Pay Bills" },
                  { value: "Create an investment" },
                ]}
              />
            </div>
          </HideOn>
        </Row>
        <Row
          className={
            "offerings-row d-flex justify-content-center mt-4 p-4 mb-4"
          }
        >
          <Offerings />
        </Row>
        <Row className={"end-row pt-4"}>
          <Footer />
        </Row>
        <Row>
          <span>{this.state.showGestureWindow ? <Gesture /> : null}</span>
        </Row>
      </>
    );
  }
}

export default Home;

import React from "react";
import { useHistory } from "react-router-dom";
import FocusCard from "../components/FocusCard";
import alcoholImage from "../images/alcohol-abuse.png";
import depressionImage from "../images/depression.png";
import anxietyimage from "../images/anxiety.png";
import PTSDImage from "../images/PTSD.png";
import drugAbuse from "../images/drug-abuse.png";
import OCDImage from "../images/OCD.png";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";

const Home = () => {
  let history = useHistory();

  const toNextPage = (focusGroupId, focusGroupName) => {
    history.push({
      pathname: `/focusUp/${focusGroupName}/${focusGroupId}`,
      state: {
        focusGroupId: focusGroupId,
        focusGroupName: focusGroupName
      }
    });
  };
  return (
    <div>
      <Navbar title="Focus Up"></Navbar>
      <div style={{ margin: "auto", width: "50%" }}>
        <Container style={{ textAlign: "center" }}>
          <Row>
            <Col>
              <div
                onClick={() =>
                  toNextPage("HHHXrCSnYpzFLktnARpY", "Alcohol Abuse")
                }
                style={{ cursor: "pointer" }}
              >
                <FocusCard title="Alcohol Abuse" image={alcoholImage} />
              </div>
            </Col>

            <Col style={{ marginLeft: "4rem" }}>
              <div
                onClick={() => toNextPage("hBUUKRBCC4waLXblavSG", "Depression")}
                style={{ cursor: "pointer" }}
              >
                <FocusCard title="Depression" image={depressionImage} />
              </div>
            </Col>
          </Row>

          {/* Row 2 */}
          <Row>
            <Col>
              <div
                onClick={() => toNextPage("rp37nrrTLWD8dQ0HDXkz", "Anxiety")}
                style={{ cursor: "pointer" }}
              >
                <FocusCard title="Anxiety" image={anxietyimage} />
              </div>
            </Col>
            <Col style={{ marginLeft: "4rem" }}>
              <div
                onClick={() => toNextPage("wp82ZtGdf4kF1ReaObQg", "OCD")}
                style={{ cursor: "pointer" }}
              >
                <FocusCard title="OCD" image={OCDImage} />
              </div>
            </Col>
          </Row>

          {/* Row 3 */}
          <Row>
            <Col>
              <div
                onClick={() => toNextPage("Ty00JzxWNWHz4OTchiwv", "Drug Abuse")}
                style={{ cursor: "pointer" }}
              >
                <FocusCard title="Drug Abuse" image={drugAbuse} />
              </div>
            </Col>
            <Col style={{ marginLeft: "4rem" }}>
              <div
                onClick={() => toNextPage("K9sJD2N3wHlLtd1KGuUV", "PTSD")}
                style={{ cursor: "pointer" }}
              >
                <FocusCard title="PTSD" image={PTSDImage} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;

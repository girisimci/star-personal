import { useState, useEffect } from "react";
import { Col, Row } from "styled-bootstrap-grid";
import s from "./personal-card.module.scss";
const PersonalCard = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setPeople(json));
    console.log(people);
  }, []);
  return (
    <>
      <Row>
        {people.map((item, index) => {
          return (
            <Col key={index} md={4}>
              <div className={s.box}>
                <span className={s.boxName}>{item.name}</span>
                <div style={{ width: "400px", height: "400px" }}>
                  <img
                    width="100%"
                    height="100%"
                    alt="My Image"
                    src={
                      "https://codlart.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fftnt8rosh7hi%2FWFOQWNUHWeaJ5xulZ3Wth%2F73bc0d278c05b7ea3f0ae9d227c8b49c%2FIMG_1248.jpg&w=3840&q=75"
                    }
                  />
                </div>
                <div className={s.boxSub}>
                  <span className={s.boxSubMail}>{item.email}</span>
                  <span className={s.boxSubPhone}>{item.phone}</span>
                  <span className={s.boxSubAddress}>{item.address.city}</span>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default PersonalCard;

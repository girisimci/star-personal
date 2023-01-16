import Image from "next/image";
import { useState, useEffect } from "react";
import { Col, Row } from "styled-bootstrap-grid";
import s from "./personal-card.module.scss";
const PersonalCard = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setPeople(json));
  }, []);
  return (
    <>
      <Row>
        {people.map((item, index)=>{
          return (
            <Col key={index} md={4}>
              <div className={s.box}>
                <span className={s.boxName}>{item.title}</span>
                <div style={{ width: "100px", height: "40px" }}>
                 { /*<Image
                    width={100}
                    height={100}
                    alt="My Image"
                    src={}
                  />*/}
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

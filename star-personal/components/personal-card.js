import { useEffect } from "react";
import { Col, Row } from "styled-bootstrap-grid";
import s from "./personal-card.module.scss";
const PersonalCard = ({userData}) => {
  useEffect(()=>{
    getServerSideProps()
  },[])
  return (
    <>
      <Row>
         <Col md={4}>
              <div className={s.box}>
              <span>ad:{userData?.name}</span>
        <span>email:{userData?.email}</span>
        <span>adress:{userData?.address?.street}</span>
              </div>
            </Col>
      </Row>
    </>
  );
};
export default PersonalCard;


export const getServerSideProps = async (context)=>{
  const res =  await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await res.json();
  console.log('kirve: ',context);
  return{
    props:{
      userData
    }
  }
}
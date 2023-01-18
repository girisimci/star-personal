import Head from "next/head";

const User = ({userData}) => {
  return (
    userData?.map((item,index)=>{
      return(

        <div style={{bacground:'red',width:'500px',height:'500px'}} key={index}>
         <span>ad:{item?.name}</span>
              <span>email:{item?.email}</span>
              <span>adress:{item?.address?.street}</span>
    </div>
      )})
  );
}
export default User;


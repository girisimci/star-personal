import React from 'react'
import User from '.';

function UserItem({userData}) {

  return (
    <User userData={userData}/>
  )
}

export default UserItem;


export const getServerSideProps = async (context)=>{
    const res =  await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const userData = await res.json();
    console.log('kirve: ',context);
    return{
      props:{
        userData
      }
    }
  }
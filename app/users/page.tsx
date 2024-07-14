import React from 'react'
//with this interface we define the shape of our User obj 
interface User{
    id:number;
    name:string;
    email:string;
}

const UsersPage = async() => {
    //we don;t need state or useEffect hooks with this approach
  const resp = await fetch('https://jsonplaceholder.typicode.com/users',
    {cache: 'no-store'} //this option -disables caching for data that changes frequently and show fresh data to our user
    // {next: {revalidate: 10}}  //if we need to keep data "fresh" for only a period of time we set next to an object with speific NextJS config params  -->means get fresh data from backend every 10secs
);  //rreturn a promise so we await is - same below
const users: User[]  = await resp.json();  //returns a promise so we await it to get the data--->  :User{} - we annotate constant with its tyoe which is user array
  return (
    // <div>UsersPage</div>
    <>
    <h1>Users</h1>
    {/* will render below statically at build time, NextJS treats our data as static - but if you disable cache it will be rendered at request time */}
    {/* <p>{new Date().toLocaleDateString()}</p>   */}
    {/* <ul>{users.map(user=><li key={user.id}> {user.name} </li>)}</ul> */}
    <table className='table table-bordered'> 
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
        {users.map(user=><tr key={user.id}> <th>{user.name}</th> <th>{user.email}</th></tr>)}
        </tbody>
    </table>
    </>
  )
}

export default UsersPage
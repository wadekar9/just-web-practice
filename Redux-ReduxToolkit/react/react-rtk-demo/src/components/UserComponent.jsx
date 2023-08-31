import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/user/userSlice';

function UserComponent() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers())
  },[]);

  return (
    <div>
      <h2>List Of users</h2>
      {user.loading && <div>Loading.....</div>}
      {!user.loading && user.error ? <div>Error : {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {
            user.users.map((item) => (
              <li key={item.id} >{item.name}</li>
            ))
          }
        </ul>
      ): null}
    </div>
  )
}

export default UserComponent

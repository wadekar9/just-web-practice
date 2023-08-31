import { useEffect } from 'react';
import { fetchUsers } from '../user/userSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

function UserComponent() {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

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

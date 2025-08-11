import UserForm from "../components/user/user.form";
import UserTable from "../components/user/usertable";
import { fetchAllUserAPI } from '../services/api.service';
import { useEffect, useState } from 'react';

const UsersPage = () => {
      const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);
    
    const loadUser = async () => {
    const res = await fetchAllUserAPI()
    setDataUsers(res.data);
  }

    return (
        <div>
            <UserForm loadUser={loadUser}/>
            <UserTable dataUsers={ dataUsers} />
        </div>
    )
}

export default UsersPage;
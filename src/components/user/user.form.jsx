import { Button, Input } from "antd";
import { useState } from "react";
import axios from "axios";

const UserForm = () => {
    const [fullName, setFullName] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPastWord] = useState("")

    const [phone, setPhoneNumber] = useState("")

    const handleClickBtn = () => {
        const URL_BACKEND = "http://localhost:8080/api/v1/user";

        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone : phone
        }
        axios.post(URL_BACKEND, data)
        console.log (">>> check state", )
    }
    return (
        <div className="user-form">
            <div>
               
                <div>
                    <div>
                        <span>FullName</span>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName( event.target.value)}}/>
                    </div>
                    <div>
                        <span>Email</span>
                        <Input
                            value={email}
                            onChange={(event) => {setEmail(event.target.value)}}/>
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password
                            value={password}
                            onChange={(event) => { setPastWord(event.target.value)}}  
                        />
                    </div>
                    <div>
                        <span>PhoneNumber</span>
                        <Input
                            value={phone}
                            onChange={(event) => { setPhoneNumber(event.target.value)}}
                        
                        />
                    </div>

                    <div>
                        <Button
                            onClick={() => {handleClickBtn()}}
                            type="primary" style={{ marginTop: 10 }}>Create User</Button>
                    </div>
                 </div>
                
            </div>
        </div>
    )
}

export default UserForm;
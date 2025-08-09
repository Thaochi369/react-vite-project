import { Button, Input } from "antd";
import { useState } from "react";


const UserForm = () => {
    const [fullName, setFullName] = useState("")

    const [email, setEmail] = useState("")

    const [passWord, setPastWord] = useState("")

    const [phoneNumber, setPhoneNumber] = useState("")

    const handleClickBtn = () => {
        
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
                            value={passWord}
                            onChange={(event) => { setPastWord(event.target.value)}}  
                        />
                    </div>
                    <div>
                        <span>PhoneNumber</span>
                        <Input
                            value={phoneNumber}
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
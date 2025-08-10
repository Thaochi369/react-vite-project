import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";


const UserForm = () => {
    const [fullName, setFullName] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPastWord] = useState("")

    const [phone, setPhoneNumber] = useState("")

    const handleClickBtn = async () => {

        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Tạo mới thành công"
            })
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
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
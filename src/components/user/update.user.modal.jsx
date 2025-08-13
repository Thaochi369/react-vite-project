import { useEffect, useState } from "react"
import {Input, notification, Modal } from "antd";
import { createUserAPI, updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
    
    const [fullName, setFullName] = useState("")
    
    const [id, setId] = useState("")
    
    const [phone, setPhoneNumber] = useState("")
    
    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;
    
    useEffect(() => {
        if (dataUpdate) {
             setFullName(dataUpdate.fullName);
        setId(dataUpdate._id)
        setPhoneNumber(dataUpdate.phone);
        }

    },[dataUpdate])
    
    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id,fullName, phone);
        if (res.data) {
            notification.success({
                message: "Update user",
                description: "Cập nhật thành công"
            })
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setFullName("");
        setId("")
        setPhoneNumber("");
        setDataUpdate(null);
    }
    return (
        <Modal
                title="Update a user"
                open={isModalUpdateOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                okText={"Save"}
            >
            <div>
                    <div>
                         <span>Id</span>
                        <Input
                            value={id}
                            disabled
                        />
                    </div>
                    
                    <div style={{display:"flex", gap:"15px", flexDirection: "column"}}>
                        <span>FullName</span>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName( event.target.value)}}/>
                    </div>
                    <div>
                        <span>PhoneNumber</span>
                        <Input
                            value={phone}
                            onChange={(event) => { setPhoneNumber(event.target.value)}}
                    
                        />
                    </div>
                </div>                        
            </Modal>
    )
}

export default UpdateUserModal;
import {useLocation} from "react-router-dom";
const { default: axios } = require("axios");
const { useState, useEffect } = require("react");
const { Form, Button } = require("react-bootstrap");


const Chat = (props) =>{
    const location = useLocation();
    const [messages,setMessages] = useState([]);
    const [message,setMessage] = useState("");

    let focusGroupID = location.state.focusGroupId;

    console.log(focusGroupID);

    useEffect(()=>{
        getMessages();
        let interval=setInterval(()=>{
            getMessages();
        },30000);
        return ()=>{
            clearInterval(interval);
        }
    },[]);

    const getMessages=()=>{
        axios.get(`https://backendservice-dot-focusup-sfhacks2022.uc.r.appspot.com/api/getchat/${focusGroupID}`).then(res=>{
            setMessages(res.data);
        })
    }

    const handleChange=(e)=>{
        e.preventDefault();
        setMessage(e.target.value);
    }

    const sendMessage=()=>{
        console.log(focusGroupID);
        axios.post('https://backendservice-dot-focusup-sfhacks2022.uc.r.appspot.com/api/sendchat/'+focusGroupID,{
            'chat' : message
        }).then(result=>{
            console.log(result);
            setMessage("");
            getMessages();
        }).catch(err=>{
            console.log(err);
        })
    }
    return(
        <div>
            <div>
            {
                messages.map(message=>{
                    return (
                        <p>
                            {message}
                        </p>
                    )
                })
            }
            </div>
            <div style={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    top: '90%'
                }
            }>
                <Form.Control
                type="text"
                placeholder="Write your message"
                onChange={handleChange}
                value={message}
                />
                 <Button onClick={() => sendMessage()} variant="primary" type="submit">Send</Button>
            </div>
        </div>
    )
}

export default Chat;
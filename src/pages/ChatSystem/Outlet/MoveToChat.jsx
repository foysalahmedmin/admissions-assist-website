import { Navigate } from "react-router-dom";

const MoveToChat = () => {
    
    return <Navigate to={'/chat_system/chat'} replace />
};

export default MoveToChat;
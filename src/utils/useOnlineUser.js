import { useEffect, useState } from "react";


const useOnlineUser = () => {
    // check if user is online
    const [isUserOnline, setIsUserOnline] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", (event) => {
            setIsUserOnline(false);
        });

        window.addEventListener("online", (event) => {
        setIsUserOnline(true);
        });

    },[])

    console.log("isUserOnline",isUserOnline);

    return isUserOnline;

};
export default useOnlineUser;
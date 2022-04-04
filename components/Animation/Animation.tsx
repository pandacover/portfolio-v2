import animationStyles from "../../styles/Animation.module.scss";
import { useState } from "react";
const Animation = () => {
    const AnimationStyles: any = {
        position: "absolute",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "Center",
        fontSize: "1.3rem",
        fontWeight: "600",
        flexDirection: "column",
        zIndex: "999",
        overflow: "hidden",
    };

    setTimeout(() => setToggleMessage(true), 2000);

    const [toggleMessage, setToggleMessage] = useState(false);
    return (
        <div className={animationStyles.container} style={AnimationStyles}>
            <span>{toggleMessage ? "Email Sent" : "Sending..."}</span>
            <br />
            <div>
                <div />
            </div>
            <br />
            <span>{toggleMessage ? "Thank you" : "Please wait for a while"}</span>
        </div>
    );
};

export default Animation;

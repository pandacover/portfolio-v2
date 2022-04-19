import { FC, useEffect, useState } from "react";

const Loader: FC = () => {
    const [triggerAnimation, setTriggerAnimation] = useState(false);
    useEffect(() => {
        setTimeout(() => setTriggerAnimation(true), 3000);
    }, []);
    return (
        <div className={`loader__container ${triggerAnimation}`}>
            <h1>{!triggerAnimation ? "Loading" : "Loading complete"}</h1>
            <div className={`loader`}>
                <div className="loader__div" />
                <div className="loader__div" />
                <div className="loader__div" />
            </div>
        </div>
    );
};

export default Loader;

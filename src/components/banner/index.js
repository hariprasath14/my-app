import { Fragment, useState } from "react";

const NotifyBanner = ({ content }) => {
    const [hideBanner, setHideBanner] = useState(false);
    return (<Fragment>
        {!hideBanner ? <div className="notify-banner-container">
            <div className="notify-banner">
                <div className="content">
                    <svg className="info-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,11a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V12A1,1,0,0,0,12,11Zm0-3a1,1,0,1,0,1,1A1,1,0,0,0,12,8Zm0-6A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z" fill="#3186ea" /></svg>
                    {content}
                </div>
                <div className="close-banner"
                    onClick={() => setHideBanner(!hideBanner)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8.001" height="7.712" viewBox="0 0 8.001 7.712">
                        <g transform="translate(0.517 0.544)">
                            <path class="a" d="M359.868,45.136l6.968,6.625" transform="translate(-359.868 -45.136)" />
                            <path class="a" d="M366.836,45.136l-6.968,6.625" transform="translate(-359.868 -45.136)" />
                        </g>
                    </svg>
                </div>
            </div>
        </div> : null}
    </Fragment>);
}

export default NotifyBanner;
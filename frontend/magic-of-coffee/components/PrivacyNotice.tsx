import React from 'react';
import './PrivacyNotice.css';  

const PrivacyNotice: React.FC = () => {
    return (
        <div className={'container'}>
            <h1 className={'title'}>Privacy Notice</h1>
            <p className={'content'}>
                Like many companies, we use "cookies" on this Website to offer you a unique browsing experience.
                Cookies are text files containing small amounts of information that may be placed on your browser,
                computer or device when you visit certain websites to collect and track information about your use
                of the websites. For example, cookies can be used to remember the pages you have visited, the time
                you have spent on each page or what is in your shopping basket. Cookies can be in the form of session
                cookies (meaning that they will be deleted from your computer or device after you leave the website)
                or persistent cookies (meaning that they will remain on your computer or device until you delete them
                or until they expire).
            </p>
            <p className={'content'}>
                Certain pages on our Websites also contain “web beacons” (also known as Internet tags, pixel tags
                and clear GIFs). These are small image files which may be placed in a web page or an email to record
                browsing behaviour. For example, web beacons can be used to verify that a promotional e-mail has
                been viewed.
            </p>
        </div>
    );
};

export default PrivacyNotice;

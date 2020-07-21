import React from 'react';

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHome } from "@fortawesome/free-solid-svg-icons";
import { fas }  from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(
  fab,
  fas,
  far,
  faInstagram,
    // more icons go here
);

function Social() {
   
    return (

        <div className="social_footer">
            <a href="https://www.linkedin.com/in/evan-scales-cs" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon 
                icon={['fab', 'linkedin-in']}
                transform="shrink-5.5" 
                mask={['fas', 'circle']} 
                fixedWidth
                className="social"
                />
            </a>
            <a href="https://github.com/evanscales-cs" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon 
                icon={['fab', 'github']} 
                fixedWidth
                className="social"
                />
            </a>
            <a href="https://www.instagram.com/evanscales/" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon 
                icon={['fab', 'instagram']} transform="shrink-4.5" 
                mask={['fas', 'circle']} 
                fixedWidth
                className="social"
            />
            </a>
            <a href="https://www.facebook.com/evanscalesss" rel="noopener noreferrer"target="_blank">
                <FontAwesomeIcon 
                icon={['fab', 'facebook']} 
                fixedWidth
                className="social"
                />
            </a>
            <a href="https://twitter.com/evanscaless" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon 
                icon={['fab', 'twitter']} 
                transform="shrink-5.5" 
                mask={['fas', 'circle']} 
                fixedWidth
                className="social"
                />
            </a>
            <a href="https://open.spotify.com/user/evanscales?si=OETkWOZjTSKArDtl4wvGEQ" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon 
                icon={['fab', 'spotify']} 
                className="social"
                fixedWidth
                />
            </a>
        </div>
    );
}

export default Social;
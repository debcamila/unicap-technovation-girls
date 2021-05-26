
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./style.css"

export default (function Icons() {
    return (
        <div className = "icons-div">
            <div className="icons">
                <IconButton>
                    <FacebookIcon fontSize="large" className="cor-icons" />
                </IconButton>
                <IconButton className="cor-icons">
                    <TwitterIcon fontSize="large" className="cor-icons" />
                </IconButton>
                <IconButton className="cor-icons">
                    <InstagramIcon fontSize="large" className="cor-icons" />
                </IconButton>
            </div>
        </div>
    )
})
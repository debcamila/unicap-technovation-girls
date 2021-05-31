
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
                    <a href="#" style={{textDecoration: 'none'}}>
                        <FacebookIcon fontSize="large" className="cor-icons" />
                    </a>
                </IconButton>
                <IconButton>
                    <a href="#" style={{textDecoration: 'none'}}>
                        <TwitterIcon fontSize="large" className="cor-icons" />
                    </a>
                </IconButton>
                <IconButton>
                    <a href="#" style={{textDecoration: 'none'}}>
                        <InstagramIcon fontSize="large" className="cor-icons" />
                    </a>
                </IconButton>
            </div>
        </div>
    )
})
import React from 'react';
import headshot from '../images/megs-cartoon.jpg';
import Button from '@material-ui/core/Button';


function Home(){
    return(
        <div className="main-background">
            <br />
                <div className = "padded-text">
                <h1>
                <br />
                <div className = "center-text black-text">
                    Megs Seeley
                </div>
                <br />
            </h1>
            <img src={headshot} alt = 'headshot' className = 'main-image' />
            <center>
            <br /> <br />
            <Button variant="contained" color="primary">
              <a href = 'https://megsseeley.github.io/Seeley_CV.html' target = 'blank' className = 'black'>
              <b> CV </b>
              </a>
            </Button>
            </center>
        </div>
        </div>
    )
}

export default Home;
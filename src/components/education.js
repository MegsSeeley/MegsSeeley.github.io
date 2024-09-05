import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

function Education() {
    return (
        <div className="main-background"> 
        <Typography variant="h3" className="white-background-text padded-text">
            Education
        </Typography> 
        <br /><br />
        <div className="white-background-manu">   
        <div className="white-background-text">
        PhD Geography | Arizona State University  
        <Typography variant="body2" color="secondary" component="p" className = "center-text">
        Coadvisors: Greg Asner &amp; Billie L Turner II  
        </Typography>
        <br />
        <Typography variant="body2" color="primary" component="p" className = "center-text">
            <FontAwesomeIcon icon={faGraduationCap} />
        </Typography>
        <br />
        BS Forest Science &amp; Botany | University of Wisconsin-Madison  
        </div>
      </div>
        <div className = 'padded-text'></div>
      </div>
   );
}
  
export default Education;
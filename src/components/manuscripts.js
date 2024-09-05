import React from 'react';
import Typography from '@material-ui/core/Typography';




function Manuscripts() {
    return (
      <div className="main-background"> 
        <Typography variant="h3" className="white-background-text padded-text">
            Manuscripts
        </Typography> 
        <br /><br />
        <div className="white-background-manu">   
        <div className="hanging-indent">
          <a href = "https://doi.org/10.1111/jbi.13491" target = 'blank' className = 'black'>
        Seeley, M., Goring, S., &amp; Williams, J. W. (2019). Assessing the environmental and dispersal controls on Fagus grandifolia distributions in the Great Lakes region. Journal of biogeography, 46(2), 405-419. doi:10.1111/jbi.13491 
        </a>  
        </div>
      </div>
        <div className = 'padded-text'></div>
      </div>
    );
  } 
  
  export default Manuscripts;
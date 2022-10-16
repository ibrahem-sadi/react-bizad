import {Link} from 'react-router-dom';
import Title from './Title';

function About() {
  return (
    <>
     <Title mainTxt="About This App">
          <p className="fs-5 text-white">
            <h2>What makes BizAd the #1 app for</h2>
            <h2>advertising business</h2>
          </p>
            </Title>

      
      
      <div className="row col-12 mb-3 text-center mt-5 text-muted">
         
                <p>Everyday many buisness owners choose to use our app to</p>
                <p>
                  advertise their business and to gain more traction to their
                </p>
                <p>website and online store</p>
                
                <Link to="/" >
                <button  className="w-20 btn btn-lg btn-primary" >
                   Start Today 
                </button>  
                </Link>
                </div>
    </>
  );
}

export default About;

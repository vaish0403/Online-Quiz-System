import React from "react";
import "./Footer.css";


const footerPage = (props) => {
  return (

    <footer className="site-footer">
           <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
          <p>2018BTECS00060 <br/>2018BTECS00069</p>
            <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
             <a href="/"> Online Examination System</a>.
              </p>
              
          </div>
        </div>
      </div>
    </footer>


  );
};

export default footerPage;
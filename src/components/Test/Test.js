import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
 

const GradientPage = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow className="mt-4 text-center">
        <MDBCol md="3" className="mb-4">
          <div className="purple-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1"></div>
          <h5 className="mb-0">purple-gradient</h5>
        </MDBCol>
        <MDBCol md="3" className="mb-4">
          <div className="blue-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1"></div>
          <h5 className="mb-0">blue-gradient</h5>
        </MDBCol>
        <MDBCol md="3" className="mb-4">
          <div className="aqua-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1"></div>
          <h5 className="mb-0">aqua-gradient</h5>
        </MDBCol>
        <MDBCol md="3" className="mb-4">
          <div className="peach-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1"></div>
          <h5 className="mb-0">peach-gradient</h5>
        </MDBCol>
      </MDBRow>
    </MDBContainer >

  );
}

export default GradientPage;
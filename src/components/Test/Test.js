import React from "react";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";

const PopoverPage = () => {
  return (
    <MDBContainer>
      <div style={{ display: "flex" }} className="m-5 p-5">
        <MDBPopover
          placement="top"
          popover
          clickable
          id="popper1"
        >
          <MDBBtn>popover on top</MDBBtn>
          <div>
            <MDBPopoverHeader>popover on top</MDBPopoverHeader>
            <MDBPopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </MDBPopoverBody>
          </div>
        </MDBPopover>

        <MDBPopover
          placement="right"
          popover
          clickable
          id="popper2"
        >
          <MDBBtn>popover on right</MDBBtn>
          <div>
            <MDBPopoverHeader>popover on right</MDBPopoverHeader>
            <MDBPopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </MDBPopoverBody>
          </div>
        </MDBPopover>

        <MDBPopover
          placement="bottom"
          popover
          clickable
          id="popper3"
        >
          <MDBBtn>popover on bottom</MDBBtn>
          <div>
            <MDBPopoverHeader>popover on bottom</MDBPopoverHeader>
            <MDBPopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </MDBPopoverBody>
          </div>
        </MDBPopover>

        <MDBPopover
          placement="left"
          popover
          clickable
          id="popper4"
        >
          <MDBBtn>popover on left</MDBBtn>
          <div>
            <MDBPopoverHeader>popover on left</MDBPopoverHeader>
            <MDBPopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </MDBPopoverBody>
          </div>
        </MDBPopover>
      </div>
    </MDBContainer>
  );
}

export default PopoverPage;
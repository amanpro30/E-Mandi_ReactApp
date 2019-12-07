import React, {Component} from 'react';
import { Card,Button} from 'react-bootstrap';
import axios from 'axios';
import jsPDF from "jspdf";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import Aux from '../../hoc/Aux'
import { MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBRow, MDBCol } from 'mdbreact';


class Order_Card extends Component{
    state={
        bids:[],
        highbids:"",
        orderDetails:[],
        modal8: false,
        reviews:[],
        avgrating:"",
        classFull:"fas fa-star",
        classHalf:"far fa-star",
        stars:[{id:"1",star:"0"},{id:"2",star:"0"},{id:"3",star:"0"},{id:"4",star:"0"},{id:"5",star:"0"}],
        starValue:0,
        review:"",
    }
    changeDate(date){
        var date_ins = new Date(date)
        return String(date_ins.getDate()).padStart(2, '0')+'-'+String(date_ins.getMonth() + 1).padStart(2, '0')+'-'+date_ins.getFullYear()
      }

    jsPdfGenerator = () => {
        var doc = new jsPDF("p", "pt", "a4");
        var pageHeight =
          doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
        var pageWidth =
          doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
        doc.setFont("Arial", "B", 140);
        doc.setFontStyle("bolditalic");
        doc.setFontType("bolditalic");
        doc.text(
          "EMandi(AUTOMATED PDF GENERATOR --- Invoice)",
          pageWidth / 2,
          50,
          "center"
        );
        doc.setFont("bold");
        doc.setFontStyle("bold");
        doc.setFontSize(10);
        doc.line(50, 60, 550, 60);
        doc.line(50, 250, 550, 250);
        
        doc.text(
          100,
          100,
    
          "Crop Name: "
        );
        doc.text(100,110, this.props.CropName)
    
        doc.text(
          100,
          130,
    
          "Crop Variety: "
        );
        doc.text(100,140, this.props.CropVariety)
        let str = "Copyright @ ₹Mandi";
        doc.setTextColor(100);
        doc.setFontSize(10);
        doc.text(str, pageWidth / 2, pageHeight - 10, "center");
        doc.save("generated.pdf");
      };
    
    toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
        [modalNumber]: !this.state[modalNumber]
    });
    this.setState({starValue:0});
    this.setState({stars:[{id:"1",star:"0"},{id:"2",star:"0"},{id:"3",star:"0"},{id:"4",star:"0"},{id:"5",star:"0"}]});
    this.setState({review:""});    
    }



    headers = {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,
      }

    setStarValue(val){
        if(val=='1'){
            this.setState({stars:[{id:"1",star:"1"},{id:"2",star:"0"},{id:"3",star:"0"},{id:"4",star:"0"},{id:"5",star:"0"}]});
        }
        else if(val=='2'){
            this.setState({stars:[{id:"1",star:"1"},{id:"2",star:"1"},{id:"3",star:"0"},{id:"4",star:"0"},{id:"5",star:"0"}]});
        }
        else if(val=='3'){
            this.setState({stars:[{id:"1",star:"1"},{id:"2",star:"1"},{id:"3",star:"1"},{id:"4",star:"0"},{id:"5",star:"0"}]});
        }
        else if(val=='4'){
            this.setState({stars:[{id:"1",star:"1"},{id:"2",star:"1"},{id:"3",star:"1"},{id:"4",star:"1"},{id:"5",star:"0"}]});
        }
        else{
            this.setState({stars:[{id:"1",star:"1"},{id:"2",star:"1"},{id:"3",star:"1"},{id:"4",star:"1"},{id:"5",star:"1"}]});
        }
        this.setState({starValue:val});
    }


    componentDidMount(){
        var self=this;  
        axios.get('http://localhost:8000/order/marketorder/'+this.props.id+'/',{headers:this.headers}).then(res=>{this.setState({orderDetails:res.data});
        axios.get('http://localhost:8000/order/getbid/order/'+this.state.orderDetails[0]['id']+'/',{headers:this.headers}).then((res)=>{res.data.sort((a, b) =>b.price -  a.price );this.setState({bids:res.data});console.log('as');this.setState({highbids:Object.values(this.state.bids)[0]['price']})});
        axios.get('http://localhost:8000/accounts/userreview/'+this.state.orderDetails[0]['user']+'/',{headers:this.headers}).then(res=>{this.setState({reviews:res.data});console.log(res.data);})
        axios.get('http://localhost:8000/accounts/avgrating/'+this.state.orderDetails[0]['user']+'/',{headers:this.headers}).then(res=>{this.setState({avgrating:res.data[0]['avgrating']});console.log(res.data[0]['avgrating']);})
    });
    }

    changeReview(e){
        let text = e.target.value;
        this.setState({review:text});
    }

    setReview(e){
        e.preventDefault();
        console.log(this.state.review);
        axios.post('http://localhost:8000/accounts/review/'+this.state.orderDetails[0]['user']+'/',{'review':this.state.review,'rating':this.state.starValue},{headers:this.headers})
    }

    render(){
        return(
            <Aux>
            <Card >
                <Card.Body>
                    <Card.Text>
                        
                        {Object.values(this.state.orderDetails).map(x => { return (
                            <tr className="col-xl-12">
                                <td className= "col-xl-2">{x.CropName}</td>
                                <td className= "col-xl-2">{x.CropVariety}</td>
                                <td className= "col-xl-1">{x.Quantity}</td>
                                <td className= "col-xl-1"><b>{this.state.highbids}</b></td>
                                <td className= "col-xl-3">{x.user}<Button className="btn-sm" onClick={this.toggle(8)}>Rate</Button></td>
                                <td className= "col-xl-2">{this.changeDate(this.props.Date)}</td>
                                <td className= "col-xl-1"><Button className="btn-sm" style={{margin:"0px"}} onClick={this.jsPdfGenerator}>Receipt</Button></td>
                            </tr>
                        ) })}
                        
                        
                    </Card.Text>
                </Card.Body>
            </Card>

            <MDBContainer  >
            <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} halfHeight fade={false} animation={false} >
            <MDBModalHeader toggle={this.toggle(8)}>&emsp;&emsp;&emsp;&emsp;&emsp;Rating and Reviws</MDBModalHeader>
            <MDBModalBody>
                <Card >
                <Card.Body>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                        <form onSubmit={e=>this.setReview(e)}>
                            {Object.values(this.state.stars).map(x=>{return (<i class={x.star=="1" ? this.state.classFull: this.state.classHalf} id={x.id} onClick={e=>this.setStarValue(x.id)}></i>)})}
                            <MDBInput type="textarea" label="Share Your Review" rows="5" value={this.state.review} onChange={e=>{this.changeReview(e)}}/>
                            <MDBBtn color="indigo" type="submit"  >Review</MDBBtn>
                        
                        </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                    Ratings:{this.state.avgrating}<br/>
                    Reviews:{Object.values(this.state.reviews).map(x => { return (<p>{x.review}</p>) })}
                </Card.Body>
                </Card>
            </MDBModalBody>
            </MDBModal>
            </MDBContainer>
            </Aux>
        )
    }
}

export default Order_Card
import React, {Component} from 'react';
import { Card,Button} from 'react-bootstrap';
import axios from 'axios';
import jsPDF from "jspdf";


class Order_Card extends Component{
    state={
        bids:[],
        highbids:"",
        orderDetails:[],
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
    



    headers = {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,
      }

    componentDidMount(){
        var self=this;  
        axios.get('http://localhost:8000/order/marketorder/'+this.props.id+'/',{headers:this.headers}).then(res=>{this.setState({orderDetails:res.data});
        axios.get('http://localhost:8000/order/getbid/order/'+this.state.orderDetails[0]['id']+'/',{headers:this.headers}).then((res)=>{res.data.sort((a, b) =>b.price -  a.price );this.setState({bids:res.data});console.log('as');this.setState({highbids:Object.values(this.state.bids)[0]['price']})});
    });
    }
    render(){
        return(

            <Card >
                <Card.Body>
                    <Card.Text>
                        
                        {Object.values(this.state.orderDetails).map(x => { return (
                            <tr className="col-xl-12">
                                <td className= "col-xl-2">{x.CropName}</td>
                                <td className= "col-xl-2">{x.CropVariety}</td>
                                <td className= "col-xl-1">{x.Quantity}</td>
                                <td className= "col-xl-1"><b>{this.state.highbids}</b></td>
                                <td className= "col-xl-2">{x.user}</td>
                                <td className= "col-xl-2">{this.changeDate(this.props.Date)}</td>
                                <td className= "col-xl-2"><Button className="btn-sm" style={{margin:"0px"}} onClick={this.jsPdfGenerator}>Receipt</Button></td>
                            </tr>
                        ) })}
                        
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Order_Card
import React, {Component} from 'react';
import { Card,Button} from 'react-bootstrap';
import axios from 'axios';
import SmallBid from './SmallBid'
import jsPDF from "jspdf";
class Order_Card extends Component{

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
        // doc.setTextColor(255, 0, 0);
        // doc.setFillColor(100, 100, 240);
        // doc.setDrawColor(100, 100, 0);
        // doc.setLineWidth(1);
        // doc.setFontType("bolditalic");
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
        
        // doc.text(
        //   100,
        //   160,
    
        //   "Seller Name: "
        // );
        // // doc.text(100,140, this.props.CropVariety)

    
        // doc.text(
        //   100,
        //   190,
    
        //   "Buyer Name: "
        // );
    
        // doc.text(
        //   100,
        //   160,
    
        //   "Quantity: "
        // );
        // doc.text(100,170,'asajgs')

        // doc.text(
        //     100,
        //     190,
        //     "Base Price"

        // );
        // doc.text(100,200, this.props.BasePrice)
        let str = "Copyright @ ₹Mandi";
        doc.setTextColor(100);
        doc.setFontSize(10);
        doc.text(str, pageWidth / 2, pageHeight - 10, "center");
        doc.save("generated.pdf");
      };
    


    state={
        bids:[],
        highbids:""
    }
    headers = {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `JWT ${localStorage.getItem('token')}`,
      }

    componentDidMount(){
        var self=this;  
        axios.get('http://localhost:8000/order/getbid/order/'+this.props.id+'/',{headers:this.headers}).then((res)=>{res.data.sort((a, b) =>b.price -  a.price );this.setState({bids:res.data});console.log('as');this.setState({highbids:Object.values(this.state.bids)[0]['price']})});
        
    }
    render(){
        return(

            <Card >
                <Card.Body>
                    <Card.Text>
                        <tr className="col-xl-12">
                            <td className= "col-xl-2">{this.props.CropName}</td>
                            <td className= "col-xl-2">{this.props.CropVariety}</td>
                            <td className= "col-xl-2">{this.props.Quantity}</td>
                            <td className= "col-xl-1"></td>
                            <td className= "col-xl-1"></td>
                            <td className= "col-xl-1"></td>
                            <td className= "col-xl-1"><b>{this.state.highbids}</b></td>
                            <td className= "col-xl-3"><Button onClick={this.jsPdfGenerator}>Generate PDF</Button></td>
                        </tr>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Order_Card
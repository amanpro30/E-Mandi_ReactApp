import React from 'react';
import Chart from './Chart';
import { getData } from "./utils"
import Layout from '../Layout/Layout'
import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
	headers = {
		"Content-Type": "application/json",
		accept: "application/json",
		Authorization: `JWT ${localStorage.getItem('token')}`,
		  
	}
	componentDidMount() {
		getData().then(data => {
			// this.setState({ data })
			// console.log(data['columns'][0])
			console.log(data)
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<Layout>
				<TypeChooser style={{background:"white"}}>
					{type => <Chart type={type} data={this.state.data} />}
				</TypeChooser>
			</Layout>
		)
	}
}

export default ChartComponent;
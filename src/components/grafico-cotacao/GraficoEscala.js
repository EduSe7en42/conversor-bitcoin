import React, { Component } from 'react'
import *  as CanvasJSChart from '../../utils/canvasjs-2.3.2/canvasjs.react'
import './GraficoEscala.sass' 

export default class GraficoEscala extends Component {
    constructor() {
		super();
		this.generateDataPoints = this.generateDataPoints.bind(this);
	}
	
	generateDataPoints(noOfDps) {
		var xVal = 1, yVal = 100;
		var dps = [];
		for(var i = 0; i < noOfDps; i++) {
			yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
			dps.push({x: xVal,y: yVal});	
			xVal++;
		}
        
        return dps;
	}
	
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			zoomEnabled: true,
			title: {
				text: "Try Zooming and Panning"
			},
			axisY: {
				includeZero: false
			},
			data: [{
				type: "area",
				dataPoints: this.generateDataPoints(500)
			}]
		}
		
		return (
            <div className="GraficoEscala">
                <CanvasJSChart class="GraficoEscala" options = {options} />
            </div>
		);
	}
}
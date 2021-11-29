//
//  HomePage
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Image, StyleSheet, Text, View, Dimensions, ScrollView , StatusBar, } from "react-native"
import {
	LineChart, PieChart
} from "react-native-chart-kit";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import PieChart from 'react-native-pie-chart';


  



export default function HomePage() {

	// static navigationOptions = ({ navigation }) => {
	
	// 	const { params = {} } = navigation.state
	// 	return {
	// 		header: null,
	// 		headerLeft: null,
	// 		headerRight: null,
	// 	}
	// }

	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		data1: 10,
	// 		data2: 20,
	// 		data3: 30,
	// 		data4: 40
	// 	};
	// }
	const isFocused = useIsFocused();
	const [lineChartData, setLineChartData] = useState([0, 0, 0, 0, 0, 0]);
	const [pieChartData, setPieChartData] = useState([{ name: "N/A", value: 0 }, { name: "N/A", value: 0 }, { name: "N/A", value: 0 }, { name: "N/A", value: 0 },])


	useEffect(() => {
		try {
			getWasteData().then((res) => {
				let parsed = JSON.parse(res);
				let numWasted = parsed.length
				setLineChartData([numWasted, 0, 0, 0, 0, 0])
				
				const wastedItems = {};
				parsed.forEach((obj) => {
					const key = `${obj.name}`;
					if (!wastedItems[key]) {
					   wastedItems[key] = { ...obj, count: 0 };
					};
					wastedItems[key].count += 1;
				 });
				let counts = (Object.values(wastedItems)) // Displays count of each
				
				counts.sort((a, b) => (a.count <= b.count) ? 1 : -1)
				
				let sorted = [];
				// Don't display pie chart data until there are atleast 4 wasted food items
				for (let i = 0; i < 4; i++) {
					sorted.push({name: counts[i].name.substr(0, counts[i].name.indexOf(',')), value: (counts[i].count / numWasted) * 100})
				}
				if (counts.length >= 4) {
					setPieChartData(sorted);
				}	
			   });
		  }
		  catch (e) {
			console.log(e)
		  }
	  }, [isFocused]);
	
	getWasteData = async () => {
		try {
			return await AsyncStorage.getItem("my-waste");
		} catch (e) {
			return e;
		}
	};
	
		//  Pie Chart data
		const screenWidth = Dimensions.get("window").width;
		const pieData = [
			{
				name: pieChartData[0].name,
				value: pieChartData[0].value,
				color: "#DE4032",
				legendFontColor: "#181818",
				legendFontSize: 13
			},
			{
				name: pieChartData[1].name,
				value: pieChartData[1].value,
				color: "#3F7EE8",
				legendFontColor: "#181818",
				legendFontSize: 13
			},
			{
				name: pieChartData[2].name,
				value: pieChartData[2].value,
				color: "#EEB205",
				legendFontColor: "#181818",
				legendFontSize: 13
			},
			{
				name: pieChartData[3].name,
				value: pieChartData[3].value,
				color: "#319F4F",
				legendFontColor: "#181818",
				legendFontSize: 13
			}
		];
		const chartConfig = {
			backgroundGradientFrom: "#1E2923",
			backgroundGradientFromOpacity: 0,
			backgroundGradientTo: "#08130D",
			backgroundGradientToOpacity: 0.5,
			color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
			strokeWidth: 2, // optional, default 3
			barPercentage: 0.5,
			
	};
	// Data for line chart
	const data = {
		labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
		datasets: [
			{
				data: lineChartData,
			}
		  ],
		  legend: ["Items Wasted"] // optional
		
	}
		
		  
		return (
			<View style={styles.container}>
				<Text style={styles.HomeText}>GreenHouse</Text>
				<Text style={styles.foodWasteText}> Food Waste History </Text>
				<LineChart
					data={data}
					width={Dimensions.get("window").width - 20} // from react-native
					height={240}
					yAxisLabel=""
					yAxisSuffix=""
					yAxisInterval={1} // optional, defaults to 1
					fromZero="True"
				
					chartConfig={{
						backgroundColor: "#55E085",
						backgroundGradientFrom: "#55E085",
						backgroundGradientTo: "green",
						decimalPlaces: 2, // optional, defaults to 2dp
						color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
						labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
						style: {
							borderRadius: 16
						},
						propsForDots: {
							r: "6",
							strokeWidth: "2",
							stroke: "#ffa726"
						},
						propsForLabels: {
							fontSize: "14"
						}
					}}
					bezier
					style={{
						marginVertical: 8,
						borderRadius: 20
					}}
				/>
				  
				<View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', }}>
					<Text style={{ fontSize: 30 }}>Food Waste by Item</Text>
					<PieChart
						data={pieData}
						width={screenWidth + 30}
						height={240}
						chartConfig={chartConfig}
						accessor="value"
						backgroundColor="none"
						paddingLeft={"7"}
						
					/>
				</View>
			</View>
		);
	}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingTop: 60,
	},
	HomeText: {
		color: "#4B9460",
		fontSize: 40
	},
	foodWasteText: {
		fontSize: 20,
	},
	title: {
		fontSize: 24,
		margin: 10
	},
	
})

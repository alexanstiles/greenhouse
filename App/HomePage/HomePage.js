//
//  HomePage
//  Greenhouse Designs 13-Sep-2021-145518
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, Dimensions, ScrollView , StatusBar, } from "react-native"
import {
	LineChart, PieChart
} from "react-native-chart-kit";
// import PieChart from 'react-native-pie-chart';


  



  export default class HomePage extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
		this.state = {
			data1: 10,
			data2: 20,
			data3: 30,
			data4: 40
			};
	}

	componentDidMount() {
	
	}

	// Example line chart for home screen
	 line = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June'],
		datasets: [
			{
				data: [20, 45, 28, 80, 99, 43],
				strokeWidth: 2, // optional
			},
		],
	};
	

	  render() {
		  
		// Example Pie Chart data
		  const screenWidth = Dimensions.get("window").width;
		  const pieData = [
			{
			name: "Milk",
			value: this.state.data1,
			color: "#855CF8",
			legendFontColor: "#181818",
			legendFontSize: 15
			},
			{
			name: "Steak",
			value: this.state.data2,
			color: "#E289F2",
			legendFontColor: "#181818",
			legendFontSize: 15
			},
			{
			name: "Bananas",
			value: this.state.data3,
			color: "#503795",
			legendFontColor: "#181818",
			legendFontSize: 15
			},
			{
			name: "Butter",
			value: this.state.data4,
			color: "#B085FF",
			legendFontColor: "#181818",
			legendFontSize: 15
			}
			];
			const chartConfig = {
			backgroundGradientFrom: "#1E2923",
			backgroundGradientFromOpacity: 0,
			backgroundGradientTo: "#08130D",
			backgroundGradientToOpacity: 0.5,
			color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
			strokeWidth: 2, // optional, default 3
			barPercentage: 0.5
		  };
		  
		  return (
			  <View style={styles.container}>
				  <Text style={styles.HomeText}>GreenHouse</Text>
				  <Text style = {styles.foodWasteText}> Food Waste History </Text>
				  <LineChart
					  data={{
						  labels: ["January", "February", "March", "April", "May", "June"],
						  datasets: [
							  {
								  data: [
									  Math.random() * 20,
									  Math.random() * 20,
									  Math.random() * 20,
									  Math.random() * 20,
									  Math.random() * 20,
									  Math.random() * 20
								  ]
							  }
						  ]
					  }}
					  width={Dimensions.get("window").width} // from react-native
					  height={220}
					  yAxisLabel=""
					  yAxisSuffix="lb"
					  yAxisInterval={1} // optional, defaults to 1
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
						  }
					  }}
					  bezier
					  style={{
						  marginVertical: 8,
						  borderRadius: 16
					  }}
				  />
				  
			<View style={{flex:1, justifyContent:'space-evenly', alignItems: 'center', }}>
				<Text style={{ fontSize:30 }}>Food Waste by Item</Text>
					<PieChart
					data={pieData}
					width={screenWidth}
					height={220}
					chartConfig={chartConfig}
					accessor="value"
					backgroundColor="transparent"
					paddingLeft="20"
					
					/>
			</View>	  
		 </View>
		  );
	  }
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

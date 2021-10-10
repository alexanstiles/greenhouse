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
	LineChart,
} from "react-native-chart-kit";
import PieChart from 'react-native-pie-chart';
import Pie from "react-native-pie";

  



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
				  
	<ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.title}>Food Waste by Item</Text>
          <PieChart
            widthAndHeight = {250}
            series={[70,10,10,10]}
            sliceColor={['#855CF8', '#E289F2', '#503795', '#B085FF']}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
        </View>
      </ScrollView>  
				  
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

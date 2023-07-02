import React from "react";
import HomeScreen from "./screens/Home";
import RecommendationScreen from "./screens/recommendation";
import PopularMoviesScreen from "./screens/Popular";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createMaterialTopNavigator} from "react-navigation-tabs";
import { RFValue } from "react-native-responsive-fontsize";

export default function App() {
  return <AppContainer />;
}

const AppTopNavigation = createMaterialTopNavigator({
  RecommendedMovies: {
    screen: RecommendationScreen,
    navigationOptions: {
      tabBarLabel: "Recommended",
      tabBarOptions: {
        tabStyle: {backgroundColor: "#fff"},
        labelStyle: {color: "#000"},
        indicatorStyle: {backgroundColor: "#000"}
      }
    }
  },
  PopularMovies: {
    screen: PopularMoviesScreen,
    navigationOptions: {
      tabBarLabel: "Popular",
      tabBarOptions: {
        tabStyle: {backgroundColor: "#fff"},
        labelStyle: {color: "#000"},
        indicatorStyle: {backgroundColor: "#000"}
      }
    }
  }
});

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    AppTopNav: {
      screen: AppTopNavigation,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
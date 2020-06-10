import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import GoalDetail from "../screens/GoalDetail";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: ""
    }
  },
  GoalDetail: {
    screen: GoalDetail,
    navigationOptions: {
      title: ""
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#333",
      borderBottomColor: "none",
      shadowColor: "none",
      shadowOpacity: 0
    }
  }
});

export default createAppContainer(HomeStack);

import HomeScreeen from "./screens/LoginScreen";
import SecondScreeen from "./screens/SecondScreen";
import SignScreen from "./screens/SignScreen";
import ViewBalance from "./screens/ViewBalance";
import TransferMoney from "./screens/TransferMoney";
import Withdraw from "./screens/Withdraw";
import Deposit from "./screens/Deposit";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ViewBase } from "react-native";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="Login"
      component={HomeScreeen}
      options={{stitle: "Welcome to Swiss Bank"}}
      />
      <Stack.Screen
      name="Second Page"
      component={SecondScreeen}
      options={{title: " Swiss Bank"}}
      />
      <Stack.Screen
      name="SignUp"
      component={SignScreen}
      options={{title: " Swiss Bank ==> Sign up"}}
     
      />
  <Stack.Screen
      name="ViewBal"
      component={ViewBalance}
      options={{title: " Swiss Bank ==> balance Details"}}
     
      />

<Stack.Screen
      name="TransferScreen"
      component={TransferMoney}
      options={{title: " Swiss Bank ==> Transfer Money"}}
     
      />
      <Stack.Screen
      name="DepositScreen"
      component={Deposit}
      options={{title: " Swiss Bank ==> Deposit Money"}}

      />

<Stack.Screen
      name="WithdrawScreen"
      component={Withdraw}
      options={{title: " Swiss Bank ==> Withdraw Money"}}

     
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


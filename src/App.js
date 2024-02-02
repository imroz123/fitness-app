import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import LightMainCard from "./pages/homepage";

function App({ signOut }) {
  return(
    <View className="App">
      <div className='container' style={{display: "flex"}}>
        <LightMainCard />
        {/* <Phoneview {...darkMode}/> */}
        {/* <WatchView {...darkMode}/> */}
      <Button variation={"primary"}style={{display: "flex", }}onClick={signOut}>Sign Out</Button>
      </div>
    </View>
  )
}

export default withAuthenticator(App);
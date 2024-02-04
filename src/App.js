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
import UserInfoForm from "./pages/userInfoForm";
// import openAI from "./pages/OpenAi";
function App({ signOut }) {
  return(
    <View className="App" style={{overflow: "scroll"}}>
      <div className='container' style={{ height: "100%", overflow: "scroll"}}>
        <LightMainCard />
        <UserInfoForm />
        {/* <Phoneview {...darkMode}/> */}
        {/* <WatchView {...darkMode}/> */}
      <Button variation={"primary"} onClick={signOut}>Sign Out</Button>
      </div>
    </View>
  )
}

export default withAuthenticator(App);
import MessengerApp from "./components/MessengerApp";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./Context/AccountProvider";
import WelcomeProvider from "./Context/WelcomeProvider";
function App() {

  const clientId='719936580148-9uqnkd595f1jererorb83jtlbc8ukbvk.apps.googleusercontent.com';

  return (
    //<div className="App">
    <GoogleOAuthProvider clientId={clientId}>
      <WelcomeProvider>
        <AccountProvider>
          <MessengerApp/>
        </AccountProvider>
      </WelcomeProvider>
    </GoogleOAuthProvider>
    //</div>
  );
}

export default App;

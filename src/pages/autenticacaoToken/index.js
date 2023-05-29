import { WebView } from "react-native-webview";
import { Component } from "react";

class AutenticacaoToken extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "https://appnative-backend-auth.onrender.com" }}
        style={{ flex: 1 }}
      />
    );
  }
}

export default AutenticacaoToken;

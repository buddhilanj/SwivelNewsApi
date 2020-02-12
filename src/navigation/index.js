import React, { Component } from "react";
import NavigationStack from "./NavigationStack";

class AppNavigation extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = ["Warning: isMounted(...) is deprecated"];
  }

  render() {
    return <NavigationStack />;
  }
}

export default AppNavigation;
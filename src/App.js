import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Picker,
  ScrollView,
  TouchableHighlight
} from "react-native";
import { Image as ReactImage } from "react-native";

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePress(target, owner) {
    if (this.props.onPress) {
      let name;
      let id;
      let index = -1;
      if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
          name = target.split("::")[0];
          id = target.split("::")[1];
        } else if (varCount === 3) {
          name = target.split("::")[0];
          index = parseInt(target.split("::")[1]);
          id = target.split("::")[2];
        }
      } else {
        name = target;
      }
      this.props.onPress({
        type: "button",
        name: name,
        index: index,
        id: id,
        owner: owner
      });
    }
  }

  handleChangeTextinput(name, value) {
    let id;
    let index = -1;
    if (name.search("::") > -1) {
      const varCount = name.split("::").length;
      if (varCount === 2) {
        name = name.split("::")[0];
        id = name.split("::")[1];
      } else if (varCount === 3) {
        name = name.split("::")[0];
        index = name.split("::")[1];
        id = name.split("::")[2];
      }
    } else {
      name = name;
    }
    let state = this.state;
    state[name.split("::").join("")] = value;
    this.setState(state, () => {
      if (this.props.onChange) {
        this.props.onChange({
          type: "textinput",
          name: name,
          value: value,
          index: index,
          id: id
        });
      }
    });
  }

  render() {
    return (
      <ScrollView
        data-layer="d6ab6682-96d2-4eff-b2ac-02ac855792f5"
        style={styles.splash}
      >
        <ReactImage
          data-layer="3fec5659-62e2-4318-a7a5-4c3f8a2b8bf8"
          source={require("/src/bent1.png")}
          style={styles.splash_bent1}
        />
        <View
          data-layer="10ccfeb0-f3bf-4c14-9826-c5ad56e9214f"
          style={styles.splash_rectangle1}
        />
        <Text
          data-layer="57ca0fbf-950c-436a-bf8f-c636766b2626"
          style={styles.splash_sayHiToBentleyTheGeneral}
        >
          SAY HI TO BENTLEY THE GENERAL !
        </Text>
      </ScrollView>
    );
  }
}

Splash.propTypes = {};

Splash.defaultProps = {};

const styles = StyleSheet.create({
  splash: {
    opacity: 1,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 375,
    height: 812,
    left: 0,
    top: 0
  },
  splash_bent1: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: "AUTO",
    height: 606,
    left: 0,
    top: 0,
    right: 0
  },
  splash_rectangle1: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(226, 194, 144, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(112, 112, 112, 1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(112, 112, 112, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(112, 112, 112, 1)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(112, 112, 112, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: "auto",
    height: 217,
    left: 0,
    right: 0,
    bottom: 0
  },
  splash_sayHiToBentleyTheGeneral: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(45, 76, 130, 1)",
    fontSize: 24,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: "Segoe UI",
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 374,
    height: 32,
    left: 1.56,
    top: 673.66
  }
});

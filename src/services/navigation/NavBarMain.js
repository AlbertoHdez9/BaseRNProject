import React, {Component} from 'react';
import {Image, Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

// Actions

// Resources
import {Style} from 'resources/Style';
import {Texts} from 'resources/Texts';
import Color from 'resources/Color';


class NavBarMain extends Component {

  render() {
    return (
      <View>
          <SafeAreaView style={styles.containerContent}>
            {this.renderButtonLeft()}
            {this.renderTitle()}
            {this.renderButtonRight()}
          </SafeAreaView>
      </View>
    );
  }

  renderButtonLeft() {
    return(
        <View style={styles.containerSide}>
          {/* Nothing */}
        </View>
    );
  }

  renderButtonRight() {
    return(
        <View style={styles.containerSide}>
          {/* Nothing */}
        </View>
    );
  }

  renderTitle() {
    return(
      <View style={styles.containerTitle}>
        <Text
          style={ [Texts.textNormal, Texts.textColorWhite, Texts.textBold] }
          numberOfLines={1}
        >
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const height     = Style.NAV_BAR_HEIGHT;
const styles = StyleSheet.create({
  containerContent: {
    height: height,
    flexDirection: 'row',
    backgroundColor: Color.primary
  },
  containerSide: {
    flex: 0.15,
    height: height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerTitle: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = () => {
  return { };
};

export default  connect(mapStateToProps, null) (NavBarMain);
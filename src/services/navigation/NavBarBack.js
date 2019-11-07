import React, { Component } from 'react';
import {
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

// Resources
import {localAssets} from 'resources/assets';
import {Style} from 'resources/Style';
import {Texts} from 'resources/Texts';
import Color from 'resources/Color';

// Actions
import {onBackAndroid} from 'services/navigation/NavManager'

class NavBarBack extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.containerContent}>
                    {this.renderButtonLeft()}
                    {this.renderTitle()}
                    {this.renderButtonRight()}
                </View>
            </SafeAreaView>
        );
    }

    renderButtonLeft() {
        return (
            <View style={styles.containerSide}>
                <TouchableOpacity
                    style={ styles.containerBackButton }
                    onPress={onBackAndroid}
                >
                    <Image
                        style={ styles.icon }
                        source={ localAssets.icBack }
                        resizeMode={ 'contain' }
                    />
                </TouchableOpacity>
            </View>
        )
    }

    renderButtonRight() {
        return (
            <View style={styles.containerSide}>
                {/* Nothing */}
            </View>
        )
    }

    renderTitle() {
        const { title } = this.props;

        return (
            <View style={styles.containerTitle}>
                <Text style={ [Texts.textNormal, Texts.textColorBlack, Texts.textBold, Texts.alignCenter] }>
                    {title}
                </Text>
            </View>
        )
    }
}

const paddingTop = Style.NAV_BAR_STATUS_HEIGHT;
const height     = Style.NAV_BAR_HEIGHT;
const iconSize   = 40;
const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                marginTop: paddingTop
            }
        }),
        backgroundColor: Color.white
    },
    containerBackButton: {
        height: iconSize,
        width: iconSize,
        justifyContent: 'center',
        alignSelf: 'center',
        // marginLeft: Style.PADDING_XS
    },
    containerContent: {
        height: height,
        flexDirection: 'row'
    },
    containerSide: {
        flex: 0.15,
        height: height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTitle: {
        flex: 0.70,
        height: height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: '100%',
        width: '100%',
        tintColor: Color.black
    },
});

export { NavBarBack };
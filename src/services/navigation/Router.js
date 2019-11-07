import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene, Stack} from 'react-native-router-flux';

// Navigation
import {NavBarBack} from 'services/navigation/NavBarBack';
import NavBarMain from 'services/navigation/NavBarMain';

// Resources
import {Style} from 'resources/styles';
import Routing from 'services/navigation/Routing';

// Views
import Films from 'modules/films/filmsContainer'
import FilmDetail from 'modules/filmDetail/filmDetailContainer'


const RouterComponent = () => {

    return (
        <Router style={styles.router}>
            <Stack key="root">
                <Scene
                    key={Routing.films}
                    initial
                    navBar={NavBarMain}
                    component={Films}
                    title="Films"
                />
                <Scene
                    key={Routing.filmDetail}
                    component={FilmDetail}
                    navBar={NavBarBack}
                    title="Film" />
            </Stack>
        </Router>
    );
};

const styles = StyleSheet.create({
    router: {
        flex: 1,
        backgroundColor: Color.white
    },
    labelStyle: {
        fontSize: Style.FONT_SIZE_SMALL_S,
        margin: 0,
    },
    tabBarStyle:{
        backgroundColor: Color.second,
        borderBottomWidth: 1,
        borderBottomColor: Color.second,
    },
    titleStyle: {
        fontSize: Style.FONT_SIZE_TITLE,
        color: Color.white,
        backgroundColor: Color.second,
        textAlign: 'left',
        // alignSelf: 'center'
    },
    titleStyleLegal: {
        fontSize: 20,
        textAlign: 'left'
    },
    navigationBarStyle: {
        height: Style.NAV_BAR_HEIGHT,
        backgroundColor: Color.second,
        borderBottomWidth: 0,
        //iOS -> Shadow
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //Android -> Shadow
        elevation: 0,
    }
});

export default RouterComponent;

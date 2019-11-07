import React from 'react';
import {Actions} from 'react-native-router-flux';

// Resources
import Routing from 'Routing';

// Components


export const onBackAndroid = () => {
    console.log('CurrentScene: ', Actions.currentScene);
    const currentScene = Actions.currentScene;

    // If "main screen" --> Ask to Exit
    if (typeof currentScene === 'string' && currentScene === Routing.films) {
        return true; // Return true to stay, or return false to exit the app.
    }

    // Go to previous view
    Actions.pop();
    return true;
};

import React from 'react';
import { Alert } from 'react-native';

//Resources


export class DialogManager {

    static singleAlert = (message) => {
        return Alert.alert(
            "",
            message,
            [
                { text: 'Accept', onPress: () => {} },
            ],
            { cancelable: false }
        );
    };

    static singleAlertOneButton = (title, message, callbackOK) => {
        return Alert.alert(
            (title !== "") ? title : "",
            message,
            [
                { text: 'Accept', onPress: callbackOK },
            ],
            { cancelable: false }
        );
    };

    static singleAlertTwoButtons = (title, message, cancelButton, okButton, callbackCancel, callbackOK) => {
        return Alert.alert(
            (title !== "") ? title : "",
            message,
            [
                { text: cancelButton, onPress: callbackCancel, style: 'cancel' },
                { text: okButton, onPress: callbackOK },
            ],
            { cancelable: false }
        );
    }
}

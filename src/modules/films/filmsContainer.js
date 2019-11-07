import React from 'react';
import {FlatList, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {connect} from 'react-redux';

// Actions
import {filterDataGoalsByState, getGoals} from '../goal/GoalActions';
import {setItemGoalDetail} from 'modules/goalDetail/GoalDetailActions';
import {
    getItemCalendarFinish,
    getItemCalendarStart,
    getItemDaysToStart,
    getItemImagePig,
    getItemPigsTotal,
    getItemMoneyRaised,
    getItemMoneyRaisedUser,
    getItemState,
    getItemTitle,
    getItemMoneyTotal,
    getItemMoneyTotalUser, getItemPiggyBankUser, getPiggyState, getItemPiggyBanks, getItemPiggyBankRefund
} from './MyPiggyBankActions';
import {getNotifications} from 'modules/notifications/NotificationsActions';

// Base
import BaseComponent from 'base/BaseComponent';

// Components
import {FloatingButton} from 'components';
import CardPig from './components/CardPig';
import PigsHeaderStates from './components/PigsHeaderStates';

// Resources
import {localAssets} from 'resources/assets/assets';
import {State} from './MyPiggyType';
import {strings} from 'resources/locales/i18n';
import {Buttons, Texts} from 'resources/styles';
import Color from 'resources/Color';
import Routing from 'services/navigation/Routing';

// Styles
import {myPiggyBankStyle} from './myPiggyBank.style';


class FilmsContainer extends BaseComponent {

    componentDidMount() {
        this._getMyPigs();
        this._getNotifications();
    }

    render() {
        return (
            <SafeAreaView style={myPiggyBankStyle.container}>
                <StatusBar backgroundColor={Color.transparent} translucent={true}/>
                {this.renderContent()}
            </SafeAreaView>
        );
    }

    renderContent() {
        const { dataGoals } = this.props;

        return (
            <View style={myPiggyBankStyle.containerContent}>
                {dataGoals && dataGoals.length > 0 && this.renderTitle()}
                {dataGoals && dataGoals.length > 0 && this.renderStates()}
                {this.renderMyPigs()}
                {dataGoals && dataGoals.length > 0 && this.renderFloatingButton()}
            </View>
        );
    }


    renderFloatingButton() {
        return (
            <FloatingButton
                imageIcon={localAssets.icAdd}
                gradientColors={ [Color.fabPrimary, Color.fabSecond] }
                onPress={() => this._onPressFloatingButton()}
            />
        )
    }

    renderMyPigs() {
        const { dataGoals, isLoading } = this.props;

        return (
            <View style={myPiggyBankStyle.containerMyPigs}>
                <FlatList
                    contentContainerStyle={myPiggyBankStyle.containerFlatList}
                    data={dataGoals}
                    refreshing={isLoading}
                    onRefresh={this._onRefresh}
                    removeClippedSubviews
                    keyExtractor={ (item, index) => index.toString() }
                    renderItem={ ({ item, index }) => this._renderItem(item, index) }
                    ListEmptyComponent={!isLoading && this._renderEmptyList()}
                />
            </View>
        )
    }

    renderStates() {
        const { dataGoalsOriginal, email } = this.props;

        return (
            <PigsHeaderStates
                arrayPigs={dataGoalsOriginal}
                email={email}
                onPressFilter={this._onPressFilter}
            />
        );
    }

    renderTitle() {
        const { dataGoalsOriginal } = this.props;
        const count = dataGoalsOriginal && dataGoalsOriginal.length > 0 ? dataGoalsOriginal.length : '';

        return (
            <Text style={ [Texts.titleL, Texts.textColorPrimary, Texts.alignCenter, myPiggyBankStyle.title] }>
                {strings('myPiggyBank.pigsInYourLife', {count})}
            </Text>
        );
    }

    /** PRIVATE METHODS **/
    _getMyPigs = () => {
        this.props.getGoals();
    };

    _getNotifications = () => {
        this.props.getNotifications(this.props);
    };

    _onPressAddMyFirstGoal = () => {
        // TODO Check if the PaymentInfo is completed or not!!
        Routing.route(Routing.goalNew);
        // Routing.route(Routing.goalCompletePayment);
    };

    _onPressFilter = (state) => {
        const { email } = this.props;
        const props = {email: email, state: state};
        this.props.filterDataGoalsByState(props);
    };

    _onPressFloatingButton = () => {
        Routing.route(Routing.goalNew);
    };

    _onPressItem = (item, index) => {
        this.props.setItemGoalDetail(item);
        Routing.route(Routing.goalDetail)
    };

    _onRefresh = () => {
        this._getMyPigs();
    };

    _renderEmptyList = () => {
        return this.renderContentNoGoals();
    };

    _renderItem = (item, index) => {
        const { email, isLoading } = this.props;
        if(isLoading) return null;
        const title           = getItemTitle(item);
        const imagePig        = getItemImagePig(item);
        const calendarFinish  = getItemCalendarFinish(item);
        const calendarStart   = getItemCalendarStart(item);
        const daysToStart     = getItemDaysToStart(item);
        const totalPigs       = getItemPiggyBanks(item).length;
        const moneyRaised     = getItemMoneyRaised(item);
        const moneyRaisedUser = getItemMoneyRaisedUser(item, email);
        const moneyTotal      = getItemMoneyTotal(item);
        const moneyTotalUser  = getItemMoneyTotalUser(item);
        const state           = getItemState(item);
        const piggyBank       = getItemPiggyBankUser(item, email);
        const piggyBankState  = getPiggyState(piggyBank);
        const refund          = getItemPiggyBankRefund();
        const renderRefund    = piggyBankState === State.REFUND || refund;

        return (
            <View style={myPiggyBankStyle.containerItem}>
                <CardPig
                    state={state}
                    piggyState={piggyBankState}
                    renderRefund={renderRefund}
                    title={title}
                    imagePig={imagePig}
                    calendarStart={calendarStart}
                    calendarFinish={calendarFinish}
                    daysToStart={daysToStart}
                    moneyRaised={moneyRaised}
                    moneyRaisedUser={moneyRaisedUser}
                    moneyTotal={moneyTotal}
                    moneyTotalUser={moneyTotalUser}
                    totalPigs={totalPigs}
                    onPress={() => this._onPressItem(item, index)}
                />
            </View>
        )
    };
}

const mapStateToProps = ({ FilmsReducer, LoadingReducer }) => {
    const { films } = FilmsReducer;
    const { isLoading } = LoadingReducer;
    return {
        films,
        isLoading
    };
};

const mapStateToPropsAction = {
    getFilms
};

export default connect(mapStateToProps, mapStateToPropsAction)(FilmsContainer);

import * as React from 'react';
import { Appbar } from 'react-native-paper';

const StoreManagementAppBar = () => {
    const _handelAlarm = () => console.log("알람 선택!");

    return (
        <Appbar.Header mode='small' style={{backgroundColor:'pink'}}>
            <Appbar.Content title="우리가게명"/>
            <Appbar.Action icon='bell' onPress={_handelAlarm} />
        </Appbar.Header>
    )
}

export default StoreManagementAppBar;
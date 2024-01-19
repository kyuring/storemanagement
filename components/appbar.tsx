import * as React from 'react';
import { Appbar } from 'react-native-paper';

const StoreManagementAppBar = () => {
    const _handelAlarm = () => console.log("알람 선택!");

    return (
        <Appbar.Header mode='small' elevated={true} style={{backgroundColor:'white'}} >
            <Appbar.Content title="매장명" titleStyle={{fontSize:16}}/>
            <Appbar.Action icon='bell' onPress={_handelAlarm}/>
        </Appbar.Header>
    )
}

export default StoreManagementAppBar;
import * as React from 'react';
import StoreManagementAppBar from '../components/appbar';

const MainScreen = () => {
    const _handelAlarm = () => console.log("알람 선택!");

    return (
        <>
            <StoreManagementAppBar/>
        </>
    )
}

export default MainScreen;
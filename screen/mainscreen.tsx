import * as React from 'react';
import theme from '../assets/theme';

import StoreManagementAppBar from '../components/appbar';
import ContentCardBox from '../components/contentbox';
import BuisnessRegisteration from '../components/businessregisteration';
import TodayStatus from '../components/todaystatus';
import StoreStatus from '../components/storestatus';
const MainScreen = () => {
    return (
        <>
            <StoreManagementAppBar/>
            <ContentCardBox title='매장개설' subtitle='사업자 번호로 매장을 등록해주세요' color='white'content={<BuisnessRegisteration/>}/>
            <ContentCardBox title='오늘 매장 현황' color={theme.colors.backGray} content={<TodayStatus/>} />
            <ContentCardBox title='매장 현황' color={'white'} content={<StoreStatus/>} />
            <ContentCardBox title='직원 현황' color={'white'} content={<TodayStatus/>} />
            
        </>
    )
}

export default MainScreen;
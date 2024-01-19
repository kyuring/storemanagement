import * as React from 'react';
import { Card, IconButton, Text} from 'react-native-paper';
import theme from '../assets/theme';
import { View } from 'react-native';

interface istatusContent {
    name : string,
    icon : string
}

const StatusContents:Array<istatusContent> = [
    {
        name : '매출',
        icon : 'camera'
    },{
        name : '재료비',
        icon : 'camera'  
    },{
        name : '공과금',
        icon : 'camera'  
    },{
        name : '공급업체',
        icon : 'camera'  
    },{
        name : '부가지출',
        icon : 'camera'  
    }
];
const StoreStatus = () => {
    return(
        <View style={{flexDirection:'row'}}>
        {
            StatusContents.map((statusContent:istatusContent, idx:number) => (
                <View key={idx} style={{width:60, height:60, marginLeft:10, flexDirection:'column', borderColor:theme.colors.tertiary, borderStyle:'solid', alignItems:'center'}}>
                    <IconButton icon={statusContent.icon} style={{flex:2}} />
                    <Text variant='bodySmall' style={{flex:1, textAlign:'center'}}>{statusContent.name}</Text>
                </View>
            ))
        }
        </View>
    )

}

export default StoreStatus;
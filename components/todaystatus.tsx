import * as React from 'react';
import { Card, Text} from 'react-native-paper';
import theme from '../assets/theme';
import { View } from 'react-native';

const TodayStatus = () => {
    return (
        <Card.Content style={{margin:3}}>
            <View style={{flexDirection:'row', marginBottom:10}}>
                <Text variant='bodyMedium' style={{color:theme.colors.primary, fontWeight:'bold', flex:1 }}>매출 : </Text>
                <Text variant='bodyLarge' style={{color:theme.colors.primary, fontWeight:'bold', paddingLeft:40, flex:2}}>100000</Text>
            </View>
            <View style={{flexDirection:'row', marginBottom:10}}>
                <Text variant='bodyMedium' style={{color:theme.colors.primary, fontWeight:'bold', flex:1 }}>비용 : </Text>
                <Text variant='bodyLarge' style={{color:theme.colors.primary, fontWeight:'bold', paddingLeft:40, flex:2}}>100000</Text>
            </View>
        </Card.Content>
    )
}

export default TodayStatus;
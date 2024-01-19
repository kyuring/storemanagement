import * as React from 'react';
import { Icon, Text, Card} from 'react-native-paper';
import theme from '../assets/theme';

const BuisnessRegisteration = () => {
    return (
        <Card.Content style={{margin:5}}>
            <Text style={{textAlign:'center', paddingVertical:15}}>
                <Icon source='plus' size={24} color={theme.colors.primary}/>
            </Text>
        </Card.Content>
    )
}

export default BuisnessRegisteration;
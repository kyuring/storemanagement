import * as React from 'react';
import { Card, Text} from 'react-native-paper';
import theme from '../assets/theme';
interface CardContent {
    title : string,
    subtitle? : string,
    color : string,
    content : object
}

const ContentCardBox = (contents:CardContent) => {
    return (
        <Card mode='elevated' style={{margin:10, backgroundColor:contents.color}}>
            <Card.Content>
                <Text variant='titleSmall'>{contents.title}</Text>
                <Text variant='labelSmall' style={{color: theme.colors.fourth}}>{contents.subtitle}</Text>
                <>{contents.content}</>
            </Card.Content>
        </Card>
    )
}

export default ContentCardBox;
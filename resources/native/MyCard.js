import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class MyCard extends React.Component {
  render() {
    return (
      <View>
        <Card
          title={this.props.cardId}
          image={require('./images/background.jpg')}>
          <Text style={{marginBottom: 10}}>
            A card item from React Native Elements is used in this React Router course. Enjoy and have fun!!!
          </Text>
          <Button
            icon={{name: 'done'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='TAP ME' />
        </Card>
      </View>
    );
  }
}

import React, { Component } from 'react';
import { Container, Header, Content, Badge, Text, Icon } from 'native-base';
export default class BadgeExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Badge>
            <Text>2</Text>
          </Badge>
          <Badge primary>
            <Text>2</Text>
          </Badge>
          <Badge success>
            <Text>2</Text>
          </Badge>
          <Badge info>
            <Text>2</Text>
          </Badge>
          <Badge warning>
            <Text>2</Text>
          </Badge>
          <Badge danger>
            <Text>2</Text>
          </Badge>
          <Badge primary>
          <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
          </Badge>
          <Badge style={{ backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}>1866</Text>
          </Badge>
        </Content>
      </Container>
    );
  }
}
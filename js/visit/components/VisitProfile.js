import React, { Component } from 'react';
import { Text, View, Spinner } from 'native-base';

import Profile from '../../profile/components/Profile'


class VisitProfile extends Component {

  constructor(props) { 
    super(props);
    this.nextListVisitSpitch = this.nextListVisitSpitch.bind(this)
    this.nextListVisitAsk = this.nextListVisitAsk.bind(this)
    this.refreshProfile = this.refreshProfile.bind(this)
    this.state={
    }
  }

  componentDidMount() {
    this.props.retreiveVisit(this.props.id)
    this.props.retreiveVisitDatas(this.props.id)
    this.props.listVisitSpitch(this.props.id)
    this.props.listVisitAsk(this.props.id)
  }

  nextListVisitSpitch(){
    if(this.props.visit.spitch.pagination.next_cursor)
        this.props.nextListVisitSpitch(this.props.id, this.props.visit.spitch.pagination.next_cursor)
  }

  nextListVisitAsk(){
    if(this.props.visit.ask.pagination.next_cursor)
        this.props.nextListVisitAsk(this.props.id, this.props.visit.ask.pagination.next_cursor)
  }

  refreshProfile(){
      this.props.retreiveVisitDatas(this.props.id)
      this.props.listVisitSpitch(this.props.id)
      this.props.listVisitAsk(this.props.id)
  }

  render() {
      const { visit } = this.props

      return (
        <View style={{flex:1}}>
            {visit.profile.fulfilled &&
              <Profile user={visit} nextListSpitch={this.nextListVisitSpitch} nextListAsk={this.nextListVisitAsk} refreshProfile={this.refreshProfile}/>
            }
        </View>
      );
    
  }
}

export default VisitProfile

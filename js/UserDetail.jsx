// @flow

// use clickHandler on profileSelects to change this.state.currentView
// use this.state.currentView to decide where selectedViewHR is displayed

import React, { Component } from 'react';
import type { RouterHistory } from 'react-router-dom';
import UserFarmingView from './UserFarmingView';
import UserGreenspacesView from './UserGreenspacesView';

// $FlowFixMe
class UserDetail extends Component {
  constructor() {
    super();
    // $FlowFixMe
    this.state = { currentView: '' };
  }

  componentWillMount() {
    if (this.props.history.location.hash) {
      // $FlowFixMe
      this.setState({ currentView: this.props.history.location.hash.slice(1) });
    } else if (this.props.user.farmer && !this.props.user.landOwner) {
      // $FlowFixMe
      this.setState({ currentView: 'farming' });
    } else if (this.props.user.landOwner && !this.props.user.farmer) {
      // $FlowFixMe
      this.setState({ currentView: 'greenspaces' });
    } else {
      // default
      // $FlowFixMe
      this.setState({ currentView: 'farming' });
    }
  }

  props: { user: User, history: RouterHistory };

  changeCurrentView = (event: SyntheticEvent<*>) =>
    // $FlowFixMe
    this.setState({ currentView: event.target.innerHTML.toLowerCase() });

  render() {
    let farmingGsPhrase;
    let volunteeringGsPhrase;
    if (this.props.user.farmingPropertyIDs) {
      if (this.props.user.farmingPropertyIDs.length > 1) {
        farmingGsPhrase = `farming ${this.props.user.farmingPropertyIDs.length} greenspaces`;
      } else {
        farmingGsPhrase = `farming 1 greenspace`;
      }
    }
    if (this.props.user.ownedPropertyIDs) {
      if (this.props.user.ownedPropertyIDs.length > 1) {
        volunteeringGsPhrase = `volunteering ${this.props.user.ownedPropertyIDs.length} greenspaces`;
      } else {
        volunteeringGsPhrase = `volunteering 1 greenspace`;
      }
    }
    let userView;
    // $FlowFixMe
    if (this.state.currentView === 'farming') {
      userView = (
        <UserFarmingView
          farmer={Object.assign(
            {},
            {
              userName: this.props.user.userName,
              id: this.props.user.id,
              bio: this.props.user.bio,
              profileImage: this.props.user.profileImage,
              community: this.props.user.community,
              properties: this.props.user.farmingPropertyIDs,
              experience: this.props.user.farmingExperienceLevel,
              skills: this.props.user.farmingSkills
            }
          )}
        />
      );
    } else {
      userView = (
        <UserGreenspacesView
          greenspaceOwner={Object.assign(
            {},
            {
              id: this.props.user.id,
              userName: this.props.user.userName,
              bio: this.props.user.bio,
              profileImage: this.props.user.profileImage,
              email: this.props.user.email,
              community: this.props.user.community,
              ownedPropertyIDs: this.props.user.ownedPropertyIDs,
              desiredLandOwnerParticipation: this.props.user.desiredLandOwnerParticipation
            }
          )}
        />
      );
    }

    const gsFarmingNum = (
      <h5 className="mh3 mt0">{this.props.user.farmingPropertyIDs ? farmingGsPhrase : 'farming 0 greenspaces'}</h5>
    );
    const gsVolunteeringNum = (
      <h5 className="mh3 mt0">
        {this.props.user.ownedPropertyIDs ? volunteeringGsPhrase : 'volunteering 0 greenspaces'}
      </h5>
    );
    const selectedViewHR = <hr className="green mb0 mt2 bw2 bl-0-l bt-0-l" />;
    const farmerProfileSelect = (
      <div className="ph2">
        <button onClick={this.changeCurrentView} className="mh3 bn bg-white avenir pointer">
          Farming
        </button>
        {// $FlowFixMe
        this.state.currentView === 'farming' ? selectedViewHR : null}
      </div>
    );
    const greenspacesProfileSelect = (
      <div className="ph2">
        <button onClick={this.changeCurrentView} className="mh3 bn bg-white avenir pointer">
          Greenspaces
        </button>
        {// $FlowFixMe
        this.state.currentView === 'greenspaces' ? selectedViewHR : null}
      </div>
    );

    return (
      <section>
        <header>
          <div className="bg-near-white tc pb3 pt5">
            <div
              className="center bg-center cover bg-green br-100"
              style={{
                backgroundImage: `url(/public/images/profile_images/${this.props.user.profileImage})`,
                width: '165px',
                height: '165px'
              }}
            />
            <h2 className="f2 avenir ttc dark-green lh-title mb2 mt3">{this.props.user.userName}</h2>
            <h5 className="f5 avenir ttc silver fw4 lh-title mt3 mb0">{this.props.user.community}</h5>
            <div className="mt3 f5 avenir near-black lh-title flex justify-center">
              {this.props.user.farmer ? gsFarmingNum : null}
              {this.props.user.landOwner ? gsVolunteeringNum : null}
            </div>
          </div>
          <div className="flex justify-center pt3 pb0 mb4">
            {this.props.user.farmer ? farmerProfileSelect : null}
            {this.props.user.landOwner ? greenspacesProfileSelect : null}
          </div>
        </header>
        <div>{userView}</div>
      </section>
    );
  }
}

export default UserDetail;

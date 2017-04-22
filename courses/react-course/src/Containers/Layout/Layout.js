import React, { Component } from 'react'
import classNames from 'classnames';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UserItem from './components/UserItem/UserItem'
import { Link, browserHistory } from 'react-router';

import './layout.css'

const numberOfUsers = 10;

class Layout extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      users: [],
      active: false,
    };
  }

    componentWillMount() {
      fetch(`https://randomuser.me/api/?results=${numberOfUsers}`, {
          method: 'GET',
      }).then(response => {
        return response.json();
      }).then(data => {
        this.setState({
          users: data.results,
        });
      }).catch((error) => {
        console.log(error);
      })
    }

    handleRedirectToAuthPage() {
      browserHistory.push('/auth')
    }

    handleActiveUser() {
     this.setState({
       active: !this.state.active,
     }, () => {
       console.log(this.state.active)
     });
    }
    
    getCls() {
     return classNames({
       'user-item-wrap': true,
       'active-user': this.state.active,
     });
    }

    render() {
       const { users } = this.state; 

       if(users) return (
            <div className="page-wrapper">
                <Header/>
                <div className="content-wrap">
                {
                  users.map((item, idx) => (
                    <UserItem
                      key={idx}
                      user={item}
                      userCls={this.getCls.bind(this)}
                      handleActive={this.handleActiveUser.bind(this)}
                    />
                  ))
                }
                <Link to="/auth" activeClassName="active-link">Go To Auth PAge</Link>
                <button onClick={this.handleRedirectToAuthPage}>Got to Auth Page</button>
                </div>
                <Footer/>
            </div>
        );
        return 
    }
}

export default Layout;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './TitleNav.css';

class TitleNav extends Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    location: '/'
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      console.log('updated')
      let location = this.props.location.pathname;
      console.log(location)
      if (!location) {
        return;
      } else {
        const routes = [
          '/',
          '/about',
          '/works'
        ];
        const allowed = routes.includes(location);
        if (allowed) {
          this.setState({ location })
        } else {
          return;
        }
      }
    } else {
      return;
    }
  }

  isActive = link => {
    const active = this.state.location;
    if (link === active) {
      return 'active'
    } else {
      return 'inactive';
    }
  }

  render() {
    return(
      <div className='nav-container'>
        <div className='left-wrapper'>
          <Link to='/'>
            <h1 className='name'>Mark Hermansen</h1>
            <h2 className='title'>Full Stack Web Developer</h2>
          </Link>
        </div>
        <div className='right-wrapper'>
          <Link to='/about' className={this.isActive('/about')}>about</Link>
          <Link to='/works' className={this.isActive('/works')}>works</Link>
        </div>
      </div>
    )
  }
}

export default TitleNav;
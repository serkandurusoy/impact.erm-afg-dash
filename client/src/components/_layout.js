import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import Footer from './_footer';

class Layout extends Component {
  static propTypes = {
    /* eslint-disable react/no-typos */
    location: ReactRouterPropTypes.location.isRequired,
    /* eslint-enable react/no-typos */
    children: PropTypes.node.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s | Afghanistan Emergency Response Mechanism Dashboard"
          defaultTitle="Afghanistan Emergency Response Mechanism Dashboard"
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);

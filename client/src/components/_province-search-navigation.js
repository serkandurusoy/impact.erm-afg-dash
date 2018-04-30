import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import Autocomplete from 'react-autocomplete';
import classNames from 'classnames';
import PROVINCES from '../constants/province-info';

class ProvinceSearchNavigation extends Component {
  static propTypes = {
    /* eslint-disable react/no-typos */
    history: ReactRouterPropTypes.history.isRequired,
    /* eslint-enable react/no-typos */
  };

  state = {
    label: '',
    active: false,
  };

  toggleActiveClass = isOpen => {
    this.setState({ active: isOpen });
  };

  handleChange = (e, label) => {
    this.setState(() => ({ label }));
  };

  handleSelect = label => {
    this.setState(() => ({ label }), () => this.go());
  };

  go = () => {
    const selectedProvince = PROVINCES.find(
      province =>
        province.label.toLowerCase() === this.state.label.toLowerCase(),
    );
    if (selectedProvince) {
      this.props.history.push(`/provinces/${selectedProvince.slug}`);
    }
  };

  render() {
    const { label, active } = this.state;
    return (
      <Autocomplete
        wrapperProps={{
          style: {},
          className: classNames('dropdown-menu nav-search__form', { active }),
        }}
        menuStyle={{
          borderRadius: 0,
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
          background: 'rgba(255, 255, 255, 0.5)',
          padding: '2px 0',
          fontSize: '90%',
          position: 'fixed',
          overflow: 'auto',
          maxHeight: '50%',
        }}
        items={PROVINCES}
        getItemValue={province => province.label}
        shouldItemRender={(province, value) =>
          province.label.toLowerCase().indexOf(value.toLowerCase()) > -1
        }
        value={label}
        renderInput={props => (
          <input
            className="form-control"
            placeholder="Search by province"
            {...props}
          />
        )}
        renderItem={(province, isHighlighted) => (
          <div
            key={province.slug}
            style={{
              borderBottom: '1px rgba(255, 255, 255, 0.1) solid',
              padding: '10px 15px',
              textAlign: 'left',
              fontSize: '1rem',
              cursor: 'pointer',
              ...(isHighlighted
                ? {
                    color: '#fff',
                    background: '#0067A9',
                  }
                : {
                    color: '#fff',
                    background: 'transparent',
                  }),
            }}
          >
            {province.label}
          </div>
        )}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        onMenuVisibilityChange={this.toggleActiveClass}
      />
    );
  }
}

export default withRouter(ProvinceSearchNavigation);

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import Autocomplete from 'react-autocomplete';
import PROVINCES from '../constants/province-info';

class ProvinceSearch extends Component {
  static propTypes = {
    /* eslint-disable react/no-typos */
    history: ReactRouterPropTypes.history.isRequired,
    /* eslint-enable react/no-typos */
  };

  state = {
    label: '',
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
    const { label } = this.state;
    return (
      <Autocomplete
        wrapperProps={{
          style: {},
          className: 'header-search',
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
          <div className="header-search__group">
            <input
              className="form-control"
              placeholder="Search by province"
              {...props}
            />
            <div className="header-search__submit">
              <button className="btn--primary" type="submit" onClick={this.go}>
                <span className="icon icon--search" />
              </button>
            </div>
          </div>
        )}
        renderItem={(province, isHighlighted) => (
          <div
            key={province.slug}
            style={{
              padding: 8,
              textAlign: 'left',
              fontSize: '120%',
              ...(isHighlighted
                ? {
                    color: '#000',
                    background: 'rgba(255, 255, 255, 0.7)',
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
      />
    );
  }
}

export default withRouter(ProvinceSearch);

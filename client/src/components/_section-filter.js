import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SectionFilter extends Component {
  static propTypes = {
    sections: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

  state = {
    filterActive: false,
  };

  toggleFilter = e => {
    e.preventDefault();
    this.setState({
      filterActive: !this.state.filterActive,
    });
  };

  render() {
    const { filterActive } = this.state;
    const { sections } = this.props;
    return (
      <div
        className={classNames('filter', {
          active: filterActive,
        })}
      >
        <a className="filter__link" onClick={this.toggleFilter} href="#">
          <span className="icon icon--filter" />Filter
        </a>
        <div className="filter__content">
          {sections.map(({ title, subTitles }) => (
            <div key={title} className="filter__column checkboxes">
              <div className="checkboxes__item--main">
                <input
                  id={title}
                  type="checkbox"
                  className="checkbox"
                  defaultChecked
                />
                <label className="label" htmlFor={title}>
                  {title}
                </label>
              </div>
              {subTitles.map((subTitle, index) => (
                <div key={subTitle} className="checkboxes__item">
                  <input
                    id={`${title}-${index}`}
                    type="checkbox"
                    className="checkbox"
                    defaultChecked
                  />
                  <label className="label" htmlFor={`${title}-${index}`}>
                    {subTitle}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SectionFilter;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SectionFilter = ({
  filterActive,
  toggleFilter,
  allSections,
  selectedSections,
  toggleSection,
  toggleSectionAll,
}) => (
  <div
    className={classNames('filter', {
      active: filterActive,
    })}
  >
    <a className="filter__link" onClick={toggleFilter} href="#">
      <span className="icon icon--filter" />Filter
    </a>
    <div className="filter__content">
      {allSections.map(({ title, subTitles }) => (
        <div key={title} className="filter__column checkboxes">
          <div className="checkboxes__item--main">
            <input
              id={title}
              type="checkbox"
              className="checkbox"
              checked={
                !!(
                  allSections.find(section => section.title === title).subTitles
                    .length ===
                  selectedSections.find(section => section.title === title)
                    .subTitles.length
                )
              }
              onChange={() => toggleSectionAll(title)}
            />
            <label className="label" htmlFor={title}>
              {title}
            </label>
          </div>
          {subTitles.map(({ subTitle, index }) => (
            <div key={subTitle} className="checkboxes__item">
              <input
                id={`${title}-${index}`}
                type="checkbox"
                className="checkbox"
                checked={
                  !!selectedSections
                    .find(section => section.title === title)
                    .subTitles.find(
                      selectedSubTitle => selectedSubTitle.index === index,
                    )
                }
                onChange={() => toggleSection(title, index)}
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

SectionFilter.propTypes = {
  allSections: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  selectedSections: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  filterActive: PropTypes.bool.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  toggleSection: PropTypes.func.isRequired,
  toggleSectionAll: PropTypes.func.isRequired,
};

export default SectionFilter;

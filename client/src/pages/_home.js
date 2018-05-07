import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import headerBlock1 from '../styles/images/header-block-1.jpg';
import headerBlock2 from '../styles/images/header-block-2.jpg';
import headerBlock3 from '../styles/images/header-block-3.jpg';
import headerBlock4 from '../styles/images/header-block-4.jpg';
import headerBlock5 from '../styles/images/header-block-5.jpg';
import headerBlock6 from '../styles/images/header-block-6.jpg';
import { Header, ProvinceSearch } from '../components/index';
import SECTIONS from '../constants/sections';

const headerBlocks = [
  [headerBlock1, headerBlock2],
  [headerBlock3, headerBlock4],
  [headerBlock5, headerBlock6],
];

const Home = () => (
  <div>
    <Header
      className="header--homepage"
      title="Afghanistan"
      subTitle="Emergency Response Mechanism (ERM) Dashboard"
      iconClass="icon--tools"
    >
      <ProvinceSearch />
      <div className="header-blocks">
        {SECTIONS.map(({ title, subTitles }, sectionIndex) => (
          <div key={title} className="header-block">
            <div className="header-block__title">
              <span className="icon icon--tools" />
              {title}
            </div>
            <div className="header-block__items">
              {subTitles.slice(0, 2).map(({ index, subTitle, anchor }) => (
                <HashLink
                  to={`/${title.toLowerCase()}#${anchor}`}
                  className="header-block__item"
                  key={index}
                >
                  <img
                    className="img-fluid"
                    src={headerBlocks[sectionIndex][index]}
                  />
                  <div className="header-block__item-title">{subTitle}</div>
                </HashLink>
              ))}
            </div>
            <Link className="header-block__link" to={`/${title.toLowerCase()}`}>
              Find out more ({subTitles.length})
            </Link>
          </div>
        ))}
      </div>
    </Header>

    <main className="main-content">
      <div className="container-fluid">
        <section className="about">
          <div className="about__left">
            <h2 className="about__title">About</h2>
          </div>
          <div className="about__right">
            <p>
              Funded by the European Commission’s Humanitarian Aid Department
              (ECHO), the Emergency Response Mechanism (ERM) was established in
              2011, as a response to emergencies triggered by ongoing conflict
              or sudden-onset natural disasters. The ERM programme ensures that
              a network of aid organisations with operations across Afghanistan,
              have sufficient resources (staff, cash reserves and stockpiles of
              goods) to urgently and directly respond to localised crises in a
              coordinated, timely and principled manner. The partners all have
              extensive experience working in Afghanistan and adhere to the
              humanitarian principles of humanity, neutrality, impartiality,
              independence and transparency.
            </p>
            <p>
              During the funding phase of ERM 7 (2017-2018) the programme was
              implemented by seven operational partners covering different
              regions within Afghanistan. The REACH initiative supported the
              partners by providing a joint information management system,
              managing and analysing data of HEAT need assessments, market
              surveys and post distribution monitoring.
            </p>
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default Home;

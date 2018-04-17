import React from 'react';
import headerBlock from '@impact/prototype/dist/images/header-block.jpg';
import Navigation from './_navigation';

const Home = () => (
  <div>
    <header>
      <section className="header--homepage">
        <Navigation />

        <div className="container-fluid">
          <div className="header__title">Afghanistan</div>
          <div className="header__subtitle">
            Emergency Response Mechanism (ERM) Dashboard
          </div>

          <div className="header-search">
            <form>
              <div className="header-search__group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by region"
                />
                <div className="header-search__submit">
                  <button className="btn--primary" type="submit">
                    <span className="icon icon--search" />
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="header-blocks">
            <div className="header-block">
              <div className="header-block__title">
                <span className="icon icon--tools" />HEAT
              </div>
              <div className="header-block__items">
                <a href="" className="header-block__item">
                  <img className="img-fluid" src={headerBlock} alt="Heat" />
                  <div className="header-block__item-title">Household</div>
                </a>
                <a href="" className="header-block__item">
                  <img className="img-fluid" src={headerBlock} alt="Heat" />
                  <div className="header-block__item-title">
                    Additional Vulnerability Assessment
                  </div>
                </a>
              </div>
              <a className="header-block__link" href="">
                Find out more (6)
              </a>
            </div>

            <div className="header-block">
              <div className="header-block__title">
                <span className="icon icon--broken-battery" />PDM
              </div>
              <div className="header-block__items">
                <a href="" className="header-block__item">
                  <img className="img-fluid" src={headerBlock} alt="Pdm" />
                  <div className="header-block__item-title">Household</div>
                </a>
                <a href="" className="header-block__item">
                  <img className="img-fluid" src={headerBlock} alt="Pdm" />
                  <div className="header-block__item-title">
                    Additional Vulnerability Assessment
                  </div>
                </a>
              </div>
              <a className="header-block__link" href="">
                Find out more (6)
              </a>
            </div>

            <div className="header-block">
              <div className="header-block__title">
                <span className="icon icon--apple" />MPC
              </div>
              <div className="header-block__items">
                <a href="" className="header-block__item">
                  <img className="img-fluid" src={headerBlock} alt="MPC" />
                  <div className="header-block__item-title">Household</div>
                </a>
                <a href="" className="header-block__item">
                  <img className="img-fluid" src={headerBlock} alt="MPC" />
                  <div className="header-block__item-title">
                    Additional Vulnerability Assessment
                  </div>
                </a>
              </div>
              <a className="header-block__link" href="">
                Find out more (6)
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>

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

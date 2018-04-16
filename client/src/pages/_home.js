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
                <span className="icon icon--apple" />MARKET
              </div>
              <div className="header-block__items">
                <a href="" className="header-block__item">
                  <img className="img-fluid" src={headerBlock} alt="Market" />
                  <div className="header-block__item-title">Household</div>
                </a>
                <a href="" className="header-block__item">
                  <img className="img-fluid" src={headerBlock} alt="Market" />
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
              The ERM concept (including the ERM consortium and ERAM programme
              from NRC) aims to increase humanitarian access and provide rapid
              humanitarian assistance to the immediate needs of communities
              affected by natural disaster and conflict. To this end, the ERM
              shares the information collected on the disaster and reduces its
              impact through a need assessment and an adapted response, both in
              a timely and effective manner. From August 2013 until March 2014,
              the ERM has been intervening to respond to the immediate needs of
              communities affected by both natural disasters and conflict.
              During this period, the ERM consortium has reached a total of 45
              968 beneficiaries. In addition to providing assistance to the
              people’s basic needs, the ERM implemented disaster risk reduction
              and mitigation infrastructure projects, through community-based
              initiatives. These activities, which benefit over 34000 people,
              also aimed to further increase the population’s resilience. In
              total, 27 projects were implemented in 6 provinces covered by the
              ERM.
            </p>
            <p>
              The ERM consortium’s partners reaffirm their commitment to the
              vulnerable populations in Afghanistan and will continue to provide
              assistance during emergency crises.
            </p>
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default Home;

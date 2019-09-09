import React, { Component } from 'react';
import Title from './Title';
export default class Services extends Component {
  state = {
    services: [
      {
        icon: 'fa fa-glass',
        title: 'Strongest Beer',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, veritatis!'
      },
      {
        icon: 'fa fa-search',
        title: 'Strongest Beer',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, veritatis!'
      },
      {
        icon: 'fa fa-podcast',
        title: 'Strongest Beer',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, veritatis!'
      },
      {
        icon: 'fa fa-phone',
        title: 'Strongest Beer',
        info:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, veritatis!'
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((service, index) => (
            <article key={index} className="service">
              <span>
                <i className={service.icon} />
              </span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

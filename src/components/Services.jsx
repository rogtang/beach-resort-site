import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, voluptatem."
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, voluptatem."
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttles",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, voluptatem."
            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, voluptatem."
            },
        ]
    }
    render() {
        return (
            <section className="services" >
                <Title title="services"/> 
                <div className="services-center">
                    {this.state.services.map((item, i) => {
                        return <article key={i} className="service" >
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

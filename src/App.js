import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import data from './data'

export default function App() {
  const cards = data.map(function(item) {
    return (
      <Card
      key={item.id}
      item= {item}
       />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card--list">
      {cards}
      </section>
    </div>
  );
}


import React from 'react'
import home from './home.module.scss'

export const Home = () => {
  return (
    <div className={home.home__container}>
      <div className={home.home__text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusantium possimus asperiores optio assumenda totam quaerat maiores reprehenderit laborum, aperiam placeat nemo?
      </div>
    </div>
  )
}
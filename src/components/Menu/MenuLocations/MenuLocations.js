import React, { useEffect, useRef } from 'react'
import { cities } from '../../../utils/images-compose'
import locations from './menu-locations.module.scss'

import {
  handleCityReturn,
  handleCity,
  fadeInUp,
} from "../../../utils/animations";

export const MenuLocations = ({ cityBackground, state }) => {
  const location = useRef(null)

  useEffect(() => {
    fadeInUp(location.current)
  }, [state])

  return (
    <div ref={location} className={locations.locations}>
      <div className={locations.locations__title}>Locations:</div>
      {
        cities.map(elem => (
          <div
            className={locations.locations__items}
            key={elem.name}
            onMouseEnter={() => handleCity(elem.image, cityBackground.current)}
            onMouseOut={() => handleCityReturn(cityBackground.current)}>
            {elem.name}
          </div>
        ))
      }
    </div>
  )
}
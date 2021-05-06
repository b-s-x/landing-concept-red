import React from 'react'
import { Switch, Route } from "react-router-dom";
import { Contact } from '../pages/Contact/Contact'
import { Home } from '../pages/Home/Home'
import { Opportunities } from '../pages/Opportunities/Opportunities'
import { Solutions } from '../pages/Solutions/Solutions'


export const useRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/opportunities" component={Opportunities} />
      <Route exact path="/solutions" component={Solutions} />
      <Route exact path="/contact-us" component={Contact} />
    </Switch>
  )
}
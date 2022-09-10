import React from 'react';
import Charts from '../pages/Charts';
import Dashboard from '../pages/Dashboard';
import Watchlist from '../pages/Watchlist';

const listings = ['india', 'us', 'germany']

const routes = listings.map(listing => {
  return {
    path: listing,
    sidebar: <Watchlist listing={listing} />,
    main: <Charts listing={listing} />
  }
})

export default [{
  path: "/",
  sidebar: <p>Dashboard</p>,
  main: <Dashboard />
}, ...routes]


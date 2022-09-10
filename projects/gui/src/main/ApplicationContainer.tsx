import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import routes from '../routes/routes'

const ApplicationContainer = () => {
  return (
    <div>
      <div>
        {routes.map((route, index) => (
          <Link
            key={index} to={route.path}
          >{route.path}</Link>
        ))}
      </div>

      <div>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.main}
            />
          ))}
        </Routes>
      </div>

      <div>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.sidebar}
            />
          ))}
        </Routes>
      </div>
    </div>
  )
}

export default ApplicationContainer

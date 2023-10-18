import React from 'react'

import { Outlet, RootRoute, Route, Router } from '@tanstack/react-router'

import App from './App'

function createRoute(path: string, component: any) {
  return new Route({
    path,
    component,
    getParentRoute: () => routeRoot,
  })
}

const routeRoot = new RootRoute({
  component: () => React.createElement(Outlet, null),
})

const routes = [createRoute('/', App)]

const routeTree = routeRoot.addChildren(routes)

export const router = new Router({
  routeTree,
})

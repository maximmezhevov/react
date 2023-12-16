import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Root } from './components/root/root'
import { EmptyPage } from './components/emptyPage'
import { About } from './components/about/about'

const router = createBrowserRouter([
	{ path: '/', element: <Root />, children: [
		{ index: true, element: <Navigate to='about' replace /> },
		{ path: 'about', element: <About /> },
    { path: 'router-example', element: <EmptyPage /> },
		{ path: 'redux-example', element: <EmptyPage /> },
	]}
])

export const Router = () => <RouterProvider router={router} />

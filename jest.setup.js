// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import '@testing-library/jest-dom'
import React from 'react'

// Helper para filtrar props de framer-motion
const filterMotionProps = (props) => {
	const { initial, animate, whileInView, viewport, transition, ...rest } = props
	return rest
}

// Mock framer-motion para tests más rápidos
jest.mock('framer-motion', () => ({
	motion: {
		div: ({ children, ...props }) => <div {...filterMotionProps(props)}>{children}</div>,
		h1: ({ children, ...props }) => <h1 {...filterMotionProps(props)}>{children}</h1>,
		h2: ({ children, ...props }) => <h2 {...filterMotionProps(props)}>{children}</h2>,
		p: ({ children, ...props }) => <p {...filterMotionProps(props)}>{children}</p>,
		section: ({ children, ...props }) => <section {...filterMotionProps(props)}>{children}</section>,
	},
	AnimatePresence: ({ children }) => children,
}))


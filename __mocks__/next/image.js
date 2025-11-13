// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import React from 'react'

const Image = ({ src, alt, fill, priority, ...props }) => {
	const imageProps = { ...props }
	if (fill) {
		imageProps.style = { ...imageProps.style, position: 'absolute', inset: 0 }
	}
	// Remover priority ya que no es un atributo HTML válido para <img>
	// eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
	return <img src={src} alt={alt} {...imageProps} />
}

export default Image


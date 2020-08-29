import React from 'react'

const Resumen = ({ datos }) => {
	const { marca, year, plan } = datos

	if (marca === '' || year === '' || plan === '') return null

	return (
		<div>
			<h2>Resumen de Cotización</h2>
			<ul>
				<li>Marca: {}</li>
				<li>Plan: {}</li>
				<li>Ano del Auto: {}</li>
			</ul>
		</div>
	)
}

export default Resumen

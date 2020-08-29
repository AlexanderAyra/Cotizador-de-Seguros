import React from 'react'
import Header from './components/Header'
import styled from '@emotion/styled'

const Contenedor = styled.div`
	min-width: 600px;
	margin: 0 auto;
`

const ContenedorFormulario = styled.div`
	background-color: #fff;
	padding: 3rem;
`

function App() {
	return (
		<Contenedor className='App'>
			<Header titulo='Cotizador de Seguros' />
			<ContenedorFormulario></ContenedorFormulario>
		</Contenedor>
	)
}

export default App

import { getFooterCopy, getFullYear } from '../utils/utils';
import React from 'react'

const Footer = () => {
	return (
		<>
			<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
		</>
	)
}

export default Footer
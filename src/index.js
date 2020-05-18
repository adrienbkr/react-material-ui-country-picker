import React from 'react';
// import { Select } from '@material-ui/core'
import countries from './countries';

const CountryPicker = (props) => {
	return (
		// <Select native>
		<select>
			{
				Object.keys(countries).map(
					countryCode =>
						<option key={countryCode} value={countryCode}>
							{countryCode}
							{/* <img src={'./flags/' + countryCode + '.svg'} alt={countryCode} /> */}
						</option>
				)
			}
		</select>
		// </Select>
	)
}

export default CountryPicker;

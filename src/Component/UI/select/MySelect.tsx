import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}: any) => {
	return (
		<select 
			value={value}
			onChange={(event: any) => onChange(event.target.value)}
		>
			<option disabled value="">{defaultValue}</option>
			{options.map((option: any) => 
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			)}
		</select>
	);
};

export default MySelect;
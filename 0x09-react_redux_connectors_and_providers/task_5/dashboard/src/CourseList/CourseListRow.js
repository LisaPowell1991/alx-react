import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	row: {
		backgroundColor: '#f5f5f5ab',
	},

	rowChecked: {
		backgroundColor: '#e6e4e4',
	},

	headerRow: {
		backgroundColor: '#deb5b545',
	},
	th: {
		borderBottom: '1px solid #ddd',
	},

	tr: {
		':nth-child(2n)': {
			textAlign: 'left',
		},
	},
});

const CourseListRow = ({
	isHeader = false,
	textFirstCell,
	textSecondCell = null
}) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<tr className={css(isHeader ? styles.headerRow : isChecked ? styles.rowChecked : styles.row, styles.tr)}>
			{isHeader ? (
				textSecondCell === null ? (
					<th className={css(styles.th)} colSpan={2}>
						{textFirstCell}
					</th>
				) : (
					<>
						<th className={css(styles.th)}>{textFirstCell}</th>
						<th className={css(styles.th, styles.thtd)}>{textSecondCell}</th>
					</>
				)
			) : (
				<>
					<td>
						<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
						{textFirstCell}
					</td>
					<td>{textSecondCell}</td>
				</>
			)}
		</tr>
	);
};

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};

export default CourseListRow;
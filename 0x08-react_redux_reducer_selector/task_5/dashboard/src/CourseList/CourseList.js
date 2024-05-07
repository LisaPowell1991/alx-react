import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	table: {
		marginTop: '2em',
		width: '90%',
		height: 'fit-content',
		border: '1px solid #ddd',
		fontSize: '1.2rem',
		marginBottom: '15em',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	th: {
		borderBottom: '1px solid #ddd',
	},
	thtd: {
		width: '80%',
	},
	tr: {
		':nth-child(2)': {
			textAlign: 'left',
		},
	},
});

const CourseList = ({ listCourses }) => {
	return (
		<table id='CourseList' className={css(styles.table)}>
			<thead>
				<CourseListRow textFirstCell='Available courses' isHeader={true} className={css(styles.th)} />
				<CourseListRow
					textFirstCell='Course name'
					textSecondCell='Credit'
					isHeader={true}
					className={(styles.th, styles.thtd)}
				/>
			</thead>
			<tbody>
				{listCourses.length > 0 ? (
					listCourses.map(({ id, name, credit }) => (
						<CourseListRow
							key={id}
							textFirstCell={name}
							textSecondCell={credit.toString()}
							className={css(styles.thtd)}
						/>
					))
				) : (
					Array(5).fill().map((_, i) => (
						<CourseListRow key={i} textFirstCell={`Row ${i + 1}`} className={css(styles.tr)} />
					))
				)}
			</tbody>
		</table>
	);
};

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
	listCourses: [],
};

export default CourseList;

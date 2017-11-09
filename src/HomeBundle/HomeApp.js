import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeApp extends Component {

	test() {
		return 1;
	}

	render() {
		return (
			<div>
				Hello, we are in home.
			</div>
			)
	}
}

HomeApp.propTypes = {
  
}

export default HomeApp
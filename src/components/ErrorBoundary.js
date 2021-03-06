import React from 'react';
import {Text, View} from 'react-native';

import Alert from './Alert';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			errorInfo: null,
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return {
			error,
			hasError: true,
		};
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			error,
			errorInfo,
		});
	}

	render() {
		if (this.state.hasError) {
			return (
				<View>
					<Alert displayType="warning" text="Something went wrong." />

					<Text>{this.state.error.toString()}</Text>

					<Text>{this.state.errorInfo.toString()}</Text>
				</View>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;

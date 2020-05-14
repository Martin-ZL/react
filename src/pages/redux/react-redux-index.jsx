import React, { Component } from "react";
import { connect } from "./fake/react-redux";

function getPageData(dispatch, getState) {
	const requestNumber = Math.ceil(Math.random() * 10);
	console.log(getState());
	console.log(dispatch);
	return new Promise((resolve) => {
		setTimeout(() => {
			dispatch({
				type: "add",
				number: requestNumber,
			});
		}, 1000);
	});
}

class TestReactReduxReal extends Component {
	render() {
		return (
			<div>
				{this.props.number}
				<button onClick={() => this.props.add()}>+</button>
				<button onClick={() => this.props.minus()}>-</button>
				<button onClick={() => this.props.asyncAdd()}>异步+</button>
			</div>
		);
	}
}
export default connect(
	(store) => ({
		number: store,
	}),
	// {
	//     add: { type: "add" },
	//     minus: {type: "minus"}
	// }
	(dispatch) => ({
		add() {
			dispatch({
				type: "add",
			});
		},
		minus() {
			dispatch({
				type: "minus",
			});
		},
		asyncAdd() {
			// dispatch((innerDispatch) => {
			// 	innerDispatch({
			// 		type: "add",
			// 		number,
			// 	});
			// });

			// dispatch({
			// 	type: "add",
			// 	number
			// })

			// getPageData().then((number) => {
			// 	dispatch({
			// 		type: "add",
			// 		number,
			// 	});
			// });

			dispatch(getPageData);
		},
	})
)(TestReactReduxReal);

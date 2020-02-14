import * as React from "react";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import { Cart, fetchCartsAction } from "../actions";

import "../static/css/Column.css";

import CartComponent from "../components/Cart";
import { Droppable } from "react-beautiful-dnd";

export interface ColumnProps {
	id: string;
	title: string;
	carts: Cart[];
	fetchCartsAction(): void;
}

class ColumnComponent extends React.PureComponent<ColumnProps> {
	componentDidMount() {
		console.log(this);
		this.props.fetchCartsAction();
	}

	render() {
		const carts = this.props.carts.map((cart, i) => {
			return (
				<CartComponent
					key={cart.id}
					cartIndex={i}
					cartId={cart.id}
					cartStatus={cart.status}
					cartName={cart.name}
				/>
			);
		});

		return (
			<div className="container-column">
				<div className="column-title"> {this.props.title} </div>
				<Droppable droppableId={this.props.id}>
					{provider => (
						<div
							ref={provider.innerRef}
							className="column-body"
							{...provider.droppableProps}
						>
							{carts} {provider.placeholder}{" "}
						</div>
					)}
				</Droppable>
			</div>
		);
	}
}

const mapStateToProps = (state: StoreState): { carts: Cart[] } => ({
	carts: state.carts
});

export default connect(mapStateToProps, { fetchCartsAction })(ColumnComponent);

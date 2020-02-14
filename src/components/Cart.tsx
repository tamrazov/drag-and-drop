import * as React from "react";
import "../static/css/Cart.css";
import { Draggable } from "react-beautiful-dnd";

export interface CartProps {
	cartIndex: number;
	cartId: string;
	cartStatus: string;
	cartName: string;
}

class CartComponent extends React.PureComponent<CartProps> {
	componentDidMount() {
		console.log(this);
	}

	render() {
		return (
			<Draggable draggableId={this.props.cartId} index={this.props.cartIndex}>
				{provided => (
					<div
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						className="container-cart"
					>
						<div>{this.props.cartName}</div>
						<div>{this.props.cartStatus}</div>
					</div>
				)}
			</Draggable>
		);
	}
}

export default CartComponent;

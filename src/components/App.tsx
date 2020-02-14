import * as React from "react";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import { fetchColumnsAction, Column } from "../actions";

import ColumnComponent from "../components/Column";

import "../static/css/App.css";
import { DragDropContext } from "react-beautiful-dnd";

export interface AppProps {
	columns: Column[];
	fetchColumnsAction(): void;
}

class App extends React.PureComponent<AppProps> {
	componentDidMount() {
		console.log(this);
		this.props.fetchColumnsAction();
	}

	OnDragEnd = (result: any) => {
		const { destination, source, draggebleId } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const column = this.props.columns[source.droppableId];
		const newCartIds = Array.from(column.id);
		newCartIds.splice(source.index, 1);
		newCartIds.splice(destination.index, 0, draggebleId);

		const newColumn = {
			...column,
			cartIds: newCartIds
		};
	};

	render() {
		const columns = this.props.columns.map((column, i) => {
			return <ColumnComponent id={column.id} key={i} title={column.title} />;
		});

		return (
			<DragDropContext onDragEnd={this.OnDragEnd}>
				<div className="container container-app">{columns}</div>
			</DragDropContext>
		);
	}
}

const mapStateToProps = (state: StoreState): { columns: Column[] } => ({
	columns: state.columns
});

export default connect(mapStateToProps, { fetchColumnsAction })(App);

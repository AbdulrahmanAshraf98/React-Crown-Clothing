import { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
	constructor() {
		super();
		this.state = {
			collection: SHOP_DATA,
		};
	}
	render() {
		const { collection } = this.state;
		return (
			<div>
				{collection.map((element) => {
					return (
						<CollectionPreview
							key={element.id}
							title={element.title}
							items={element.items}
						/>
					);
				})}
			</div>
		);
	}
}
export default ShopPage;

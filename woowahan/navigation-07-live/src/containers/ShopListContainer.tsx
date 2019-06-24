import * as React from "react";
import { connect } from "react-redux";
import { IStoreState, IShop } from "../store";
import { requestShopList } from "../actions";
import { ShopList as ShopListComponent } from "../components";

interface IProps {
  shopList: IShop[];
  requestShopList(): void;
}

const mapStateToProps = (state: IStoreState) => ({
  shopList: state.shopList
});

const mapDispatchToProps = dispatch => ({
  requestShopList: () => dispatch(requestShopList())
});

const ShopList: React.FC<IProps> = props => {
  React.useEffect(() => {
    props.requestShopList();
  }, []);

  return <ShopListComponent data={props.shopList} />;
};

export const ShopListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopList);

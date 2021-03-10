import React from "react";
import "./category.styles.scss";
import { selectCategory } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import { connect } from "react-redux";

const CategoryPage = ({ collection }) => {
  console.log(collection);
  const { id, ...otherCollectionProps } = collection;
  return (
    <div className="category">
      <CollectionPreview key={id} {...otherCollectionProps} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCategory(ownProps.match.params.categoryId)(state),
  };
};

export default connect(mapStateToProps)(CategoryPage);

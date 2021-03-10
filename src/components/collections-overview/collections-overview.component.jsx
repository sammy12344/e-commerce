import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./collections-overview.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionPreview from "../preview-collection/preview-collection.component";

const CollectionsOverview = ({ collections }) => {
  return(
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionPros }) => (
        <CollectionPreview
          key={id}
          {...otherCollectionPros}
        ></CollectionPreview>
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollection,
});

export default connect(mapStateToProps)(CollectionsOverview);

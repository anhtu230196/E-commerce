import React from 'react'
import { connect } from 'react-redux'
import { selectCollectionsForReview } from '../../redux/selectors/shopSelector'
import CollectionsPreview from './collection-preview/CollectionPreview'
import "./CollectionsOverview.scss"

function CollectionsOverview({ collections }) {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherProps }) => <CollectionsPreview key={id} {...otherProps} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        collections: selectCollectionsForReview(state)
    }
}

export default connect(mapStateToProps)(CollectionsOverview)

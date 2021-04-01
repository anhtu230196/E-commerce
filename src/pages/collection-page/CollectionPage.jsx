import React from 'react'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-Item/CollectionItem'
import { selectCollection } from '../../redux/selectors/shopSelector'
import "./CollectionPage.scss"

function CollectionPage({ collection }) {

    // const { title, items } = collection
    return (
        collection ? <div className="collection-page">
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {collection.items.map(item => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
            :
            <div>...</div>

    )


}

const mapStateToProps = (state, props) => {
    return {
        collection: selectCollection(props.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(CollectionPage)

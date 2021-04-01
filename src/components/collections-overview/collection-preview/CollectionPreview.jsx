import React from 'react'
import { withRouter } from 'react-router-dom'
import CollectionItem from '../../collection-Item/CollectionItem'
import CustomBottom from '../../custom-button/CustomBottom'
import "./CollectionPreview.scss"

function CollectionsPreview({ title, items, history }) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.slice(0, 4).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
            <CustomBottom style={{ margin: "20px auto" }} onClick={() => { history.push(`/shop/${title.toLowerCase()}`) }}>More...</CustomBottom>
        </div>
    )
}

export default withRouter(CollectionsPreview)

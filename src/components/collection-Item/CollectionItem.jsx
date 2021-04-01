import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/actions/cartAction'
import CustomBottom from '../custom-button/CustomBottom'
import "./CollectionItem.scss"

function CollectionItem({ item, dispatch }) {
    const { name, price, imageUrl } = item
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomBottom invert onClick={() => dispatch(addItem(item))}>Add To Cart</CustomBottom>
        </div>
    )
}

export default connect()(CollectionItem)

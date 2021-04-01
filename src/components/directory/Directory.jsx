import React from 'react'
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/selectors/directorySelectlor'
import MenuItem from '../menu-item/MenuItem'
import "./Directory.scss"

function Directory({ sections }) {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherProps }) => <MenuItem key={id} {...otherProps} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        sections: selectDirectorySections(state)
    }
}

export default connect(mapStateToProps)(Directory)

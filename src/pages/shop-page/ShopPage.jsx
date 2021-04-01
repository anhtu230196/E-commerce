import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import { fetchCollectionsStartAsync } from '../../redux/actions/shopActions';
import { selectIsCollectionFetching } from '../../redux/selectors/shopSelector';
import CollectionPage from '../collection-page/CollectionPage';
import LoadingPage from "../loading-page/LoadingPage"
class ShopPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCollectionsStartAsync())
    }
    render() {
        const { match, isLoading } = this.props
        return (
            isLoading ? <LoadingPage style={{ margin: "0 auto" }} /> : <div>
                <Route exact path={`${match.path}`} render={() => <CollectionsOverview />} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: selectIsCollectionFetching(state)
    }
}

export default connect(mapStateToProps)(ShopPage);
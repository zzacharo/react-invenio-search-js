import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ResultsView from './ResultsView';

const mapStateToProps = state => ({
    results: state.search.results,
    isFetching: state.search.isFetching
})

export default connect(
    mapStateToProps,
    null
)(ResultsView);

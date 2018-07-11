import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import SearchBar from './SearchBar';
import search  from '../../actions';

const mapStateToProps = state => ({
    query: state.search.query
})

const mapDispatchToProps = dispatch => bindActionCreators({
    search
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

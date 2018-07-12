import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import ResultsView from './components/resultsView';
import SearchBar from './components/searchBar';

const styles = {
    toolbar: {
        backgroundColor: 'mediumblue'
    },
    formControl: {
        marginRight: '10px',
    },
    textField: {
        width: 200
    },
    gridButtons: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    gridImage: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#fff',
        margin: '10px'
    }
};

class SearchPage extends Component {

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={6} sm={12}>
                        <div id="search-form">
                            <SearchBar/>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={10}>
                        <ResultsView/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default SearchPage;

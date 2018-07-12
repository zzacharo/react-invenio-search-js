import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = {
    root: {
        width: '100%',
        maxWidth: 360,
    },
};


class ListView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { data } = this.props;
        const listData = data.map((item, index) => (
            <ListItem key={index}>
                <ListItemText
                    primary={item.title}
                    secondary={item.description} />
            </ListItem>
        ));

        return (
            <div className={styles.root}>
                <List>
                    {listData}
                </List>
            </div>
        );
    }
}

ListView.propTypes = {
    data: PropTypes.array.isRequired,
};

export default ListView;

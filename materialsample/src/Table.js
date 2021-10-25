import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const todoscolumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'userId',
        headerName: 'USER ID',
        width: 150,
        editable: true,
    },
    {
        field: 'title',
        headerName: 'TITLE',
        width: 600
    },
    {
        field: 'completed',
        headerName: 'COMPLETED',
        type: 'boolean',
        width: 110
    },
];

const commentcolumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'postId',
        headerName: 'POST ID',
        width: 150,
        editable: true,
    },
    {
        field: 'name',
        headerName: 'NAME',
        width: 150
    },
    {
        field: 'email',
        headerName: 'email',
        width: 110
    },
    {
        field: 'body',
        headerName: 'body',
        width: 400
    },
];


class Table extends React.Component {
    render() {

        return (
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={this.props.tabledata}
                    columns={this.props.header}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </div>
        );
    }
}

export default Table


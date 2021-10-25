import { DataGrid } from '@mui/x-data-grid';



export default function DataTable(props) {

    let columns = []

    if(props.rows.length > 0)
    for (let property in props.rows[0]) {
        columns.push({ field: property, headerName: property.toUpperCase(), width: 150 },)
    }

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={props.rows} columns={columns} />
        </div>
    );
}
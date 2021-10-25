
import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
export default function Table(props) {
    if (props.alldata.length === 0)
        return (<div></div>)
    else {
        let rows = props.alldata
        let columns =[]
        for(let propertyname in rows[0]){
            columns.push({
                field: propertyname,
                headerName: propertyname.toUpperCase(),
                width: 300
            })
        }

        return (
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                   
                />
            </div>
        )
    }
}


import { useDispatch,useSelector } from 'react-redux'
import {fetchAll} from '../action/ActionCreator'
import DataTable from './DataTable'
function ListResource() {
    const dispatch = useDispatch()
    const data = useSelector(state => state)

    const handleEntireClick = () => {
        dispatch(fetchAll())
    }
   
    return (
        <div>
            <h1>List Resource</h1>
            <label>Press button for entire data</label>
            <button onClick={handleEntireClick}>FETCH</button>
            <br/>
            <DataTable rows={data.arrayData}></DataTable>
        </div>
    )


}
export default ListResource
import { useFormik } from 'formik'
import { formSubmit } from '../action/ActionCreator'
import { useDispatch,useSelector } from 'react-redux'
function CreateUser() {
    const dispatch = useDispatch()
    const formresponse = useSelector(state => state.formresponse)
    const formik = useFormik({
        initialValues: {
            name: '',
            job: ''
        },
        onSubmit: values => {
            dispatch(formSubmit(values))
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Enter Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <br />
                <label htmlFor="job">Enter  job</label>
                <input
                    id="job"
                    name="job"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.job}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            {JSON.stringify(formresponse)}
        </div>
    );

}
export default CreateUser


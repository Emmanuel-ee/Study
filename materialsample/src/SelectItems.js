import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

class SelectItems extends React.Component {


    render() {
        return (
            <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        onChange={this.props.captureChange}
                        label="Please select required item"
                    >
                        <MenuItem value="comments">comments</MenuItem>
                        <br />
                        <MenuItem value="todos">todos</MenuItem>
                    </Select>
                </FormControl>

            </div>
        );
    }
}
export default SelectItems
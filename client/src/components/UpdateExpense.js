import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import { AiFillEdit } from 'react-icons/ai'
import axios from 'axios'

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);

    const [exName, setExName] = React.useState(props.exName)
    const [exCost, setExCost] = React.useState(props.exCost)
    const [exDate, setExDate] = React.useState(props.exD)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function editExpenseHandler() {
        if (exName !== '' && exCost !== '' & exDate !== '') {
            const updatedExpense = {
                exName: exName,
                exCost: exCost,
                exDate: exDate,
                exId: props.exId
            }
            console.log(updatedExpense)

            axios.post('/api/expenses/updateexpense', updatedExpense).then(res => {
                console.log(res)
                alert("Expense updated successfully")
                setOpen(false);
                window.location.reload();
            }).catch(err => {
                console.log(err)
                alert("an error occured")
            })
        }
        else {
            alert("Fields are empty!")
        }

    }

    return (
        <div>
            <AiFillEdit variant="outlined" onClick={handleClickOpen} style={{ cursor: 'pointer' }}/>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Expense</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        type="text"
                        value={exName}
                        onChange={(e) => { setExName(e.target.value) }}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        value={exCost}
                        onChange={(e) => { setExCost(e.target.value) }}
                        label="Cost"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        value={exDate}
                        onChange={(e) => { setExDate(e.target.value) }}
                        label="Date"
                        type="date"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={editExpenseHandler}>Edit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
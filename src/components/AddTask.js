import { useState } from "react";
import Swal from "sweetalert2";


const AddTask = ({ onSave }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        if (!text && !day) {
            Swal.fire({
                icon: 'error',
                title: "Ooops...",
                text: "Fill in your task and date or close the form!",
                timer: 5000
            })
        } else if (!text && day) {
            Swal.fire({
                icon: 'error',
                title: "Ooops...",
                text: "Fill in your task!",
                timer: 5000
            })
        } else if (text && !day) {
            Swal.fire({
                icon: 'error',
                title: "Ooops...",
                text: "Fill in your date!",
                timer: 5000
            })
        } else {
            onSave({ text, day });
        }
        setDay('');
        setText('');
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="add day & time" value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <input type="submit" className="btn btn-block" value="Save Task"></input>
        </form>
    )
}

export default AddTask;
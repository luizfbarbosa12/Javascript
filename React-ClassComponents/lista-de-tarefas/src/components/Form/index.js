import { FaPlus } from "react-icons/fa";
import './Form.css'

export default function Form(props) {
    return(
        <form onSubmit={props.handleSubmit} action="#" className="form">
          <input value={props.novaTarefa} onChange={props.changeInput} type="text" />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
    )
}
import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import "./Tarefas.css";

export default function Tarefas(props) {
  return (
    <ul className="tarefas">
      {props.tarefas.map((tarefa, index) => {
        return (
          <li key={index}>
            {tarefa}
            <span>
              <FaEdit
                onClick={(e) => props.handleEdit(e, index)}
                className="edit"
              />
              <FaWindowClose
                onClick={(e) => props.handleDelete(e, index)}
                className="delete"
              />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

import "./style.css";

export function DropdownList(props) {


  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select onChange={event => props.toChanged(event.target.value)} required={props.required}>
        <option value=""></option>
        {props.itens.map((item, index) => {
          return <option key={index}>{item}</option>
        })}
      </select>
    </div>
  );
};

import "./style.css";

export function TextField(props) {

  function whenTyped(event) {
    props.toChanged(event.target.value);
    
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input onChange={whenTyped} required={props.required} placeholder={props.placeholder} />
    </div>
  );
}

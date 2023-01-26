import "./style.css";

export function Button(props){
  return (
    <button className="button">
      {props.children}
    </button>
  );
};
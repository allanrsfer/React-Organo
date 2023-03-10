import "./style.css";

export function Card({name, image, jobRole, background}) {
  return(
    <div className="card">
      <div className="header" style={{backgroundColor: background}}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{jobRole}</h5>
      </div>
    </div>
  );
};
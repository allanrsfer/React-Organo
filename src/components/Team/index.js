import { Card } from "../Card";
import "./style.css";

export function Team(props) {
  return (
    props.collaborators.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="collaborators">
          {props.collaborators.map((collaborator) => (
            <Card
              key={collaborator.name}
              background={props.primaryColor}
              name={collaborator.name}
              jobRole={collaborator.jobRole}
              image={collaborator.image}
            />
          ))}
        </div>
      </section>
    )
  );
}

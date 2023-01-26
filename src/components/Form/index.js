import { useState } from "react";
import { Button } from "../Button";
import { DropdownList } from "../DropdownList";
import { TextField } from "../TextField";
import "./style.css";

export function Form(props) {
  const [name, setName] = useState("");
  const [jobRole, setJobRule] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  function whenSaving(event) {
    event.preventDefault();
    props.toRegisteredEmployee({
      name,
      jobRole,
      image,
      team,
    })
  }

  return (
    <section className="form">
      <form onSubmit={whenSaving}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          toChanged={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={jobRole}
          toChanged={(value) => setJobRule(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={image}
          toChanged={(value) => setImage(value)}
        />
        <DropdownList
          required={true}
          label="Time"
          itens={props.teams}
          value={team}
          toChanged={(value) => setTeam(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
}
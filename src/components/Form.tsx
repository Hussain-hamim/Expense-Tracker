import { FormEvent, useRef, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name=""
          id="name"
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label"></label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          id="age"
          value={person.age}
          type="number"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default Form;

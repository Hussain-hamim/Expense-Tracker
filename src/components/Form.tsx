import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "The name must be at least 3 characters" }),
  age: z
    .number({ invalid_type_error: "age field is required" })
    .positive()
    .min(18, { message: "age must at lest 18 years" }),
});

type formData = z.infer<typeof schema>;

const Form = () => {
  const [formData, setFormData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => setFormData(data.name);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name")}
          />
          {errors.name && <p className="text-danger">{errors.name.message}!</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label"></label>
          <input
            id="age"
            type="number"
            className="form-control"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      <p>Hello, {formData}</p>
    </>
  );
};
export default Form;

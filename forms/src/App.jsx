import "./App.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


const schema = z.object({
  name: z.string().min(4, "მინიმუმ 4 სიმბოლო"),
  surname: z.string().min(4, "მინიმუმ 4 სიმბოლო"),

  age: z
    .number({ invalid_type_error: "უნდა იყოს რიცხვი" })
    .min(1, "არასწორი ასაკი"),

  email: z.string().email("არასწორი email"),

  pass: z
    .string()
    .min(6, "მინიმუმ 6 სიმბოლო")
    .regex(/[A-Z]/, "უნდა შეიცავდეს დიდ ასოს")
    .regex(/[0-9]/, "უნდა შეიცავდეს ციფრს"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
   
    await new Promise((res) => setTimeout(res, 1000));
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-72 bg-white p-5 rounded-xl shadow"
      >
        <h2 className="text-lg font-bold">Registration</h2>

        
        <input
          placeholder="Name"
          {...register("name")}
          className={`border p-2 ${
            errors.name ? "border-red-500 bg-red-100" : "border-gray-300"
          }`}
        />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>

        <input
          placeholder="Surname"
          {...register("surname")}
          className={`border p-2 ${
            errors.surname ? "border-red-500 bg-red-100" : "border-gray-300"
          }`}
        />
        <p className="text-red-500 text-sm">{errors.surname?.message}</p>

        
        <input
          type="number"
          placeholder="Age"
          {...register("age", { valueAsNumber: true })}
          className={`border p-2 ${
            errors.age ? "border-red-500 bg-red-100" : "border-gray-300"
          }`}
        />
        <p className="text-red-500 text-sm">{errors.age?.message}</p>

        
        <input
          placeholder="Email"
          {...register("email")}
          className={`border p-2 ${
            errors.email ? "border-red-500 bg-red-100" : "border-gray-300"
          }`}
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        
        <input
          type="password"
          placeholder="Password"
          {...register("pass")}
          className={`border p-2 ${
            errors.pass ? "border-red-500 bg-red-100" : "border-gray-300"
          }`}
        />
        <p className="text-red-500 text-sm">{errors.pass?.message}</p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default App;
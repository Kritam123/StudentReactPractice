import React from "react";

const Form = () => {
  // const [name,setName] = React.useState("");
  // const [text,setText] = React.useState("");
  // const [car, setCar] = React.useState("volvo");
  //    const handleChangeName = (e)=>{
  //     // console.log(e)
  //     setName(e.target.value)
  // }
  // const handleChangeText = (e)=>{
  //     // console.log(e)
  //     setText(e.target.value)
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Name:", { name, text });
  };
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    text: "",
    car: "volvo",
    gender: "",
    hobbies: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target; // hobbies , singing
    if (name === "hobbies") {
      const isChecked = e.target.checked;
      setFormData((prevState) => {
        const updatedHobbies = isChecked
          ? [...prevState.hobbies, value]  // [singing,dancing]
          : prevState.hobbies.filter((hobby) => hobby !== value);
        return {
          ...prevState,
          [name]: updatedHobbies, // hobbies: [singing,dancing]
        };
      });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column", width: "300px" }}
      onSubmit={handleSubmit}
    >
      <label>
        Enter your name:
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your email:
        <input
          name="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your password:
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <label>Enter your text:</label>
      <textarea
        name="text"
        value={formData.text}
        onChange={handleChange}
      ></textarea>
      <label>Select Car:</label>
      <select name="car" value={formData.car} onChange={handleChange}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <label>Enter your Gender:</label>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={formData.gender === "male"}
        onChange={handleChange}
      />{" "}
      Male
      <input
        type="radio"
        name="gender"
        value="female"
        checked={formData.gender === "female"}
        onChange={handleChange}
      />{" "}
      Female
      {/* checkbox */}
      <label>My hobbies:</label>
      <label>Singing</label>
      <input
        type="checkbox"
        name="hobbies"
        value="singing"
        checked={formData.hobbies.includes("singing")}
        onChange={handleChange}
      />
      <label>Dancing</label>
      <input
        type="checkbox"
        name="hobbies"
        value="dancing"
        checked={formData.hobbies.includes("dancing")}
        onChange={handleChange}
      />
      <p>Current value: {formData.name}</p>
      <p>Selected Car: {formData.car}</p>
      <p>Selected Gender: {formData.gender}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

// import { useRef } from 'react';

// export default function UncontrolledForm() {
//   const nameRef = useRef(null);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Directly pulls the value from the DOM node
//     console.log('Submitted Name:', nameRef.current.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Seed an initial value using defaultValue instead of value */}
//       <input type="text" ref={nameRef} defaultValue="John Doe" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

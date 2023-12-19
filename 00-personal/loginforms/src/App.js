import { useState } from "react";
// import $ from "jquery";

export default function App() {
  return (
    <div>
      <h2>Registeration Page</h2>
      <RegistrationPage></RegistrationPage>
    </div>
  );
}

function RegistrationPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(password);
    console.log(cPassword);

    password === cPassword
      ? console.log("Password Matched")
      : console.log("Password did not match");

    // console.log(e);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const form = $(e.target);
  //   $.ajax({
  //     type: "POST",
  //     url: form.attr("action"),
  //     data: form.serialize(),
  //     success(data) {
  //       setResult(data);
  //     },
  //   });
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   console.log(name);
  // }

  return (
    <form action="test.php" method="post" onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
      />
      <br />

      <label>Phone Number:</label>
      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />

      <label>Email: </label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <label>Password:</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <label>Confirm Password:</label>
      <input
        type="text"
        value={cPassword}
        onChange={(e) => setCPassword(e.target.value)}
      />
      <br />

      <button>Register</button>
    </form>
  );
}

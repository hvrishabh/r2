const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 12, packed: false },
  { id: 4, description: "keys", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🚝 Far Away 🏝</h1>;
}
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    // onSubmit={(e)=>handleSubmit(e)}
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item.." />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id}></Item>
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on you list, and you already packed X (x%)</em>
    </footer>
  );
}

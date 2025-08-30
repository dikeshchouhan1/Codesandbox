export default Proflie = ({ data, setData, error }) => {
  const { name, email, age } = data;

  const handleDataChange = (e, item) => {
    setData((prevSate) => ({
      ...prevSate,
      [item]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
        {error.name && <span className="error">{error.name}</span>}
      </div>
      <div>
        <label>age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />
        {error.age && <span className="error">{error.age}</span>}
      </div>
      <div>
        <label>email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
        {error.email && <span className="error">{error.email}</span>}
      </div>
    </div>
  );
};

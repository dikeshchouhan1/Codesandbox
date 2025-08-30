export default Setting = ({ data, setData }) => {
  const { theme } = data;

  const handleDataChange = (e) => {
    setData((prevSate) => ({
      ...prevSate,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            dark
            checked={theme === "dark"}
            onChange={handleDataChange}
          />
          dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            dark
            checked={theme === "light"}
            onChange={handleDataChange}
          />
          light
        </label>
      </div>
    </div>
  );
};

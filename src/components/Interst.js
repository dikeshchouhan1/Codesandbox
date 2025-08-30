export default Interst = ({ data, setData, error }) => {
  const { interst } = data;
  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interst: e.target.checked
        ? [...prevState.interst, e.target.name]
        : prevState.interst.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interst.includes("coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interst.includes("music")}
            onChange={handleDataChange}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="javascript"
            checked={interst.includes("javascript")}
            onChange={handleDataChange}
          />
          JavaScript
        </label>
      </div>
      {error.interst && <span className="error">{error.interst}</span>}
    </div>
  );
};

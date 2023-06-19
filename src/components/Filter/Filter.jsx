export const Filter = ({ handleSavingFilter }) => {
  const handleInputChange = e => {
    handleSavingFilter(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="search"
        onChange={handleInputChange}
        style={{ borderRadius: 15, padding: 5 }}
      ></input>
    </div>
  );
};

export default Filter;

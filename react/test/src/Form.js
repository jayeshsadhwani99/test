import React from "react";

function Form({ data, index, handleChange, handleDelete }) {
  return (
    <div>
      <form>
        <input
          type="text"
          value={data.name}
          onChange={(e) => handleChange(e, index)}
          placeholder="Name"
          name="name"
        />
      </form>
      <button type="button" onClick={() => handleDelete(index)}>
        Del
      </button>
    </div>
  );
}

export default Form;

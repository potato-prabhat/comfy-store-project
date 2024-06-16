const Forminput = ({ label, name, type, defaultValue }) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        className="input input-bordered "
        defaultValue={defaultValue}
      />
    </label>
  )
}
export default Forminput

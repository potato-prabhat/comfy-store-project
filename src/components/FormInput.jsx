const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        className={`input input-bordered ${size}`}
        defaultValue={defaultValue}
      />
    </div>
  )
}
export default FormInput

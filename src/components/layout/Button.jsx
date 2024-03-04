
function Button({children, variant, type, isDisabled}) {
  return (
    <>
      <button type={type} disabled={isDisabled} className={`btn btn-${variant}`}>
        {children}
      </button>
    </>
  )
}

export default Button

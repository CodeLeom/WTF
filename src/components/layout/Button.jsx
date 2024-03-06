


function Button({children, variant, type, isDisabled, onClick}) {
  return (
    <>
      <button type={type} disabled={isDisabled} onClick={onClick} className={`btn btn-${variant}`}>
        {children}
      </button>
    </>
  )
}

export default Button

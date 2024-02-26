import logoUrl from '../../assets/logo.png';

function Header() {
  return (
    <>
      <div className='header'>
        <img src={logoUrl} alt="Tesla" />
      </div>
    </>
  )
}

export default Header

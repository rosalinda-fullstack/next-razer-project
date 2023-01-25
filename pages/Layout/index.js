import Navbar from '../components/Navbar/header'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main > 
      {children}
      </main>
    </>
  )
}
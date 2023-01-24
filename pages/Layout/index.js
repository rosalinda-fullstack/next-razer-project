import Navbar from '../components/Navbar/header'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-center bg-hero_pattern bg-no-repeat bg-cover" > 
      {children}
      </main>
    </>
  )
}
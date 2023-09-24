import Categories from '@/components/common/Categories'
import Toast from '@/components/common/Toast'
import NavBar from '@/components/header/NavBar'

export default function Home() {
  return (
    <main className="">
      <Toast />
      <NavBar />
      <Categories />
    </main>
  )
}

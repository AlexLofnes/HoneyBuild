import Navbar from "./components/Navbar";

export default function IndexPage() {
  return (
    <div className='h-screen bg-[url("../public/mainBg.jpg")] bg-cover bg-top'>
      <Navbar />
      <div className="flex justify-center h-[90%]">
        <div className="flex justify-center align-middle w-4/5 h-5/6 rounded-2xl bg-white bg-opacity-30 mt-16">
          <h1 className="text-7xl font-bold">Emery&apos;s Honey</h1>
        </div>
      </div>
      
    </div>
  )
}
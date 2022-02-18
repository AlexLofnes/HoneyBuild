import Navbar from "./components/Navbar";

export default function IndexPage() {
  return (
    <div className='h-screen bg-[url("../public/mainBg.jpg")] bg-cover bg-top'>
      <Navbar />
      <div className="flex justify-center h-[90%]">
        <div className="text-center w-4/5 h-5/6 rounded-2xl bg-white bg-opacity-40 mt-16">
          <h1 className="text-8xl font-bold m-4">Emery&apos;s Honey</h1>
          <h2 className="text-4xl mb-6">Delicious honey farmed in Norfolk</h2>
          <p className="text-2xl text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec mi mi. Ut a imperdiet massa, ut posuere mi. Donec bibendum mauris eget enim dictum, non mollis quam placerat. Aliquam erat volutpat. Quisque auctor viverra ante, id laoreet sapien ornare sed. Suspendisse laoreet volutpat consectetur. Fusce non felis gravida lorem interdum vestibulum sed posuere sapien. Etiam ornare augue ac quam porta pretium. Quisque nec eleifend ligula, id finibus urna. Quisque at aliquam magna, at porttitor purus. Suspendisse gravida cursus lacus eu volutpat. Donec volutpat a erat vitae rutrum. Duis in elit egestas, interdum dui a, malesuada mauris. Etiam viverra sodales enim ut hendrerit. Ut eu lacinia sem. Nunc aliquet, sem a rutrum pharetra, odio tellus tincidunt quam, a cursus justo orci quis sapien.</p>
        </div>
      </div>
    </div>
  )
}
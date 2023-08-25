import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <p>Hello world!</p>
      <Image src="/ed.jpg" alt="de.jpg" width={400} height={10}/>
      <h1>
        anything
      </h1>
      <div className="bg-[url('public/background-transformed.jpeg')]"></div>
      <a href="#">bananana</a>
    </main>
  )
}

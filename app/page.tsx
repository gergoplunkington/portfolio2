"use client"
import { ParallaxLayer } from '@react-spring/parallax'
import { Parallax } from '@react-spring/parallax'
import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/background-transformed.jpeg')] bg-center bg-cover">
      <div>
        <Parallax pages={2}>
          <ParallaxLayer offset={0}>
            <h2 className=" text-6xl textcenter font-bold ">welcome</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={0.1} speed={0.5} factor={1}>
            <h2>bungling ung</h2>
          </ParallaxLayer>
        </Parallax>
      </div>
      <p>Hello world!</p>
      <Image src="/ed.jpg" alt="de.jpg" width={400} height={10}/>
      <div>
        <Parallax pages={4}>
          <ParallaxLayer offset={0} sticky={{start:0.2, end:2.4}}>
            <h2> className="" mobinf dingdg</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={0.1} speed={0.5} factor={1}>
            <h2>bungling ung</h2>
          </ParallaxLayer>
        </Parallax>
      </div>
      <h2>
        anything
      </h2>
      <a href="#">bananana</a>
    </main>
  )
}
import { HomeContainer, Product } from "@/styles/pages/home"
import { useKeenSlider } from 'keen-slider/react'
import Image from "next/image"

import camiseta1 from '../assets/1.png'
import camiseta2 from '../assets/1.png'
import camiseta3 from '../assets/1.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRed] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 200,
    }
  })

  return (
   <HomeContainer ref={sliderRed} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="Camisetas" />
        <footer>
          <strong>Camseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="Camisetas" />
        <footer>
          <strong>Camseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="Camisetas" />
        <footer>
          <strong>Camseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

       <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="Camisetas" />
        <footer>
          <strong>Camseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
   </HomeContainer>
  )
}

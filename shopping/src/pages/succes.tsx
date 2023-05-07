import { SuccessContainer, ImageContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Succes() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer>

      </ImageContainer>
      <p>
        Uhuul <strong>Jennifer Soliver</strong>, sua <strong>Camiseta maneira</strong> já está a caminho.
      </p>

      <Link href={'/'}>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}
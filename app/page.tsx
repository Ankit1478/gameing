import { AnimatedPinDemo } from "@/components/3dpin";
import { AppleCardsCarouselDemo } from "@/components/appleCard";
import { Card } from "@/components/Card";
import { CoverDemo } from "@/components/ContainerCover";
import { AppleStyleFooter } from "@/components/Fotter";
import { GoogleGeminiEffectDemo } from "@/components/GeminiEffect";
import { AuroraBackgroundDemo } from "@/components/LandingPage";
import { MacbookScrollDemo } from "@/components/MacbookEffects";
import { NavbarDemo } from "@/components/Navbar";
import { ImagesSliderDemo } from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return <div>
    <AuroraBackgroundDemo></AuroraBackgroundDemo>
   
   <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
   
   <GoogleGeminiEffectDemo></GoogleGeminiEffectDemo>
   <MacbookScrollDemo></MacbookScrollDemo>
   <CoverDemo></CoverDemo>
    <Card></Card>
    <CoverDemo></CoverDemo>
    <ImagesSliderDemo></ImagesSliderDemo>
    
    <AppleStyleFooter></AppleStyleFooter>
  </div>
}

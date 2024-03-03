import Container from "@/components/shared/Container";
import Collaborate from "@/components/ui/Collaborate";
import HeroArea from "@/components/ui/HeroArea";
import TrustedUsers from "@/components/ui/TrustedUsers";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Container>      
        <HeroArea />        
        {/* <TrustedUsers /> */}
        <Collaborate />
      </Container>
    </div>
  );
}

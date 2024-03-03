import Container from "@/components/shared/Container";
import Collaborate from "@/components/ui/Collaborate";
import HeroArea from "@/components/ui/HeroArea";
import TrustedUsers from "@/components/ui/TrustedUsers";
import WorkTogether from "@/components/ui/WorkTogether";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Container>      
        <HeroArea />        
        {/* <TrustedUsers /> */}
        <Collaborate />
        <WorkTogether />
      </Container>
    </div>
  );
}

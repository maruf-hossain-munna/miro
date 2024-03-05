import Container from "@/components/shared/Container";
import BestTeams from "@/components/ui/BestTeams";
import Collaborate from "@/components/ui/Collaborate";
import ConnectTools from "@/components/ui/ConnectTools";
import HeroArea from "@/components/ui/HeroArea";
import TheWaysWeWork from "@/components/ui/TheWaysWeWork";
import TrustedUsers from "@/components/ui/TrustedUsers";
import WorkTogether from "@/components/ui/WorkTogether";
import BuiltWork from "@/components/ui/tabs/workTab/BuiltWork";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Container>
        <HeroArea />
        {/* <TrustedUsers /> */}
        <Collaborate />
        <WorkTogether />
        <ConnectTools />
        <TheWaysWeWork />
        {/* <BuiltWork /> */}
        <BestTeams />
      </Container>
    </div>
  );
}

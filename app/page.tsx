import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Container>
      <h2 className="bg-dark-purple text-sky-blue">hello world</h2>
      <Button 
        label="Sign up free "
        custom="px-16 py-3 mt-12"
        icon={MdArrowRightAlt}
      />
      </Container>
    </div>
  );
}

import Heading from "../Heading";
import Button from "../Button";
import Container from "../Container";

const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/bannerbg.jpg')] py-[350px] bg-no-repeat bg-center bg-cover">
      <Container>
        <Heading
          className={
            "font-extrabold font-openSans leading-[70px] pr-[18px] text-[72px] w-[700px] text-[#192239 text-center]"
          }
          text={"We Are Digital Marketing Agency"}
          as={"h1"}
        />
        <Heading
          className={
            "text-[20px] font-paprika leading-8 text-[#6C7D93] pt-5 w-[700px]"
          }
          text={
            "Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing."
          }
          as={"h2"}
        />
        <Button
          btnTxt={"Get Free Quotio"}
          className={"text-white hover:bg-amber-400 font-paprika mt-3"}
        />
      </Container>
    </div>
  );
};

export default Banner;

import nirjhorImage from "@/assets/images/Nirjhor-removebg-preview.png";
import satirthaImage from "@/assets/images/Satirtha-removebg-preview.png";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { MainCard } from "@/components/ui/MainCard";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Nirjhor Saha",
    position: "Jr. Software Engineer @ HATechZ",
    text: "Antu is very passionate and has a great vision for his work. His focus keeps everything moving smoothly, he makes sure all the deadlines are met and makes sure that whatever project he is working on meets the highest standards.",
    avatar: nirjhorImage,
  },
  {
    name: "Satirtha Sen",
    position: "Digital Marketing Specialist @ Upwork",
    text: "Working with Antu was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: satirthaImage,
  },
  {
    name: "Nirjhor Saha",
    position: "Jr. Software Engineer @ HATechZ",
    text: "Antu is very passionate and has a great vision for his work. His focus keeps everything moving smoothly, he makes sure all the deadlines are met and makes sure that whatever project he is working on meets the highest standards.",
    avatar: nirjhorImage,
  },
  {
    name: "Satirtha Sen",
    position: "Digital Marketing Specialist @ Upwork",
    text: "Working with Antu was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: satirthaImage,
  },
  {
    name: "Nirjhor Saha",
    position: "Jr. Software Engineer @ HATechZ",
    text: "Antu is very passionate and has a great vision for his work. His focus keeps everything moving smoothly, he makes sure all the deadlines are met and makes sure that whatever project he is working on meets the highest standards.",
    avatar: nirjhorImage,
  },
  {
    name: "Satirtha Sen",
    position: "Digital Marketing Specialist @ Upwork",
    text: "Working with Antu was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: satirthaImage,
  },
  // {
  //   name: "Daniel White",
  //   position: "CEO @ InnovateCo",
  //   text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
  //   avatar: memojiAvatar3,
  // },
  // {
  //   name: "Emily Carter",
  //   position: "Product Manager @ GlobalTech",
  //   text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
  //   avatar: memojiAvatar4,
  // },
  // {
  //   name: "Michael Brown",
  //   position: "Director of IT @ MegaCorp",
  //   text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
  //   avatar: memojiAvatar5,
  // },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {
                  testimonials.map(testimonial => (
                    <MainCard key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex rounded-full items-center flex-shrink-0">
                          <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <h5 className="text-sm text-white/40">{testimonial.position}</h5>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                    </MainCard>
                  ))
                }
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

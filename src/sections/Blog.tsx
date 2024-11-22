import blog1Image from "@/assets/images/Blog1_Image.png";
import blog2Image from "@/assets/images/Blog2_Image.png";
import blog3Image from "@/assets/images/Blog3_Image.png";
import { SectionHeader } from "./SectionHeader";
import { BlogCard } from "@/components/ui/blogCard";

const Blogs = [
  {
    title: "The Rise of Web3: Transforming Digital Ownership",
    description:
      "Web3 is revolutionizing the internet by introducing decentralized technologies and empowering users with true ownership of their data and assets. Learn about its key features and future implications.",
    author: "John Doe",
    date: "November 15, 2024",
    link: "/blogs/web3-transformation",
    image: blog1Image,
  },
  {
    title: "React vs Angular vs Vue: Choosing the Right Framework",
    description:
      "Confused about which JavaScript framework to use? This guide breaks down the pros and cons of React, Angular, and Vue to help you make the best choice for your project.",
    author: "Jane Smith",
    date: "November 10, 2024",
    link: "/blogs/framework-comparison",
    image: blog2Image,
  },
  {
    title: "Mastering TypeScript for Scalable Web Applications",
    description:
      "TypeScript is becoming the go-to language for building scalable and maintainable web applications. Explore the benefits of TypeScript and how it can enhance your development workflow.",
    author: "Alex Johnson",
    date: "November 5, 2024",
    link: "/blogs/typescript-essentials",
    image: blog3Image,
  },
];

export const BlogsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="blogs">
      <div className="container">
        <SectionHeader
          eyebrow="Latest Insights"
          title="Featured Blogs"
          description="Dive into articles exploring the latest trends and technologies in web development."
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {Blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

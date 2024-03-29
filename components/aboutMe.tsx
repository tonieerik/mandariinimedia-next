import type { Page } from "@/interfaces/page";
import { client } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";
import SanityImage from "./SanityImage";

const AboutMe = async () => {
  const pageContent = (
    await client.fetch<Page[]>(`*[_type == "page" && pageKey == "aboutMe"]`)
  )[0];

  return (
    <section className="about-me flex flex-col lg:flex-row m-8 md:mx-48 md:my-16">
      <div className="w-full lg:w-1/2 lg:mr-12">
        {pageContent.content.map((content, i) => (
          <PortableText key={`about-me-b${i}`} value={content} />
        ))}
      </div>
      <div className="w-full lg:w-1/2 mt-6 lg:mt-12">
        {pageContent.image && (
          <SanityImage
            src={pageContent.image}
            alt={pageContent.imageAlt || "Sisällöntuottaja Nelli"}
            width={1334}
            height={2000}
          />
        )}
      </div>
    </section>
  );
};

export default AboutMe;

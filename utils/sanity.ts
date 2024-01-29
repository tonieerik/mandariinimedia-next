import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-27";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source).url();

// export const getImageUrl = (source: any) => {
//   console.log(source);
//   return (
//     "https://cdn.sanity.io/images/" +
//     projectId +
//     "/" +
//     dataset +
//     "/" +
//     source.asset._ref
//   );
// };

import { Collection } from "@/components/shared/Collection";
import { PageWrapper } from "@/components/shared/PageWrapper";
import { navLinks } from "@/constants";
import { getImages } from "@/lib/actions/image.actions";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = String((searchParams?.query as string) || "");
  const images = await getImages({ page, searchQuery });
  return (
    <PageWrapper>
      <section className="home">
        <h1 className="home-heading">
          Unleash your creative vision with Imaginify
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((info) => (
            <Link
              className="flex-center flex-col gap-2"
              href={info.route}
              key={info.route}
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image
                  src={info.icon}
                  width={24}
                  height={24}
                  alt={info.label}
                />
              </li>
              <p className="p-14-medium text-center text-white">{info.label}</p>
            </Link>
          ))}
        </ul>
      </section>
      <section className="sm:mt-20">
        <Collection
          hasSearch
          totalPages={images?.totalPage}
          images={images?.data}
          page={page}
        />
      </section>
    </PageWrapper>
  );
};

export default Home;

import { fetchAPI } from "@/lib/strapi";
import { Categories, Page } from "@/types/menu";
import { micromark } from "micromark";
import Header from "./header";

type Params = {
  params: {
    category: string;
    page: string;
  };
};

export async function generateMetadata({ params }: Params) {
  const filteredPages = await fetchAPI("/pages", {
    filters: {
      slug: {
        $eq: params.page,
      },
    },
  });
  const page = filteredPages.data[0];

  return {
    title: page.attributes.title,
  };
}

export async function generateStaticParams() {
  const categories: Categories = await fetchAPI("/categories", {
    populate: "pages",
  });

  return categories.data.map((category) => {
    return category.attributes.pages?.data.map((page) => {
      return {
        params: {
          page: `${category.attributes.url}/${page.attributes.slug}`,
        },
      };
    });
  });
}

const MenuPage = async ({ params }: Params) => {
  const filteredPages = await fetchAPI("/pages", {
    filters: {
      slug: {
        $eq: params.page,
      },
    },
  });

  const page: Page = filteredPages.data[0];

  return (
    <div className="pb-24 space-y-6">
      <Header
        category={params.category}
        title={page.attributes.title}
        date={page.attributes.updatedAt}
      />
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: micromark(page.attributes.content) }}
      />
    </div>
  );
};

export default MenuPage;

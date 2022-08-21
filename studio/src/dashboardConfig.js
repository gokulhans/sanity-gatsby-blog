export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6301b36773d2454ccc1fa479",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-2ft1ot1u",
                  apiId: "2df84d98-9c21-45be-8866-568cdf629fc2",
                },
                {
                  buildHookId: "6301b367ab4f3a4b5ee371e5",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-rd2ftdb8",
                  apiId: "c7edfab2-1407-47f0-981c-60bd1b443f13",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/gokulhans/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-rd2ftdb8.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

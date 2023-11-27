export interface Post {
  id: string;
  publishedAt: Date;
  title: string;
  slug: string;
  content: {
    html: string;
  };
  thumbnail: {
    width: number;
    height: number;
    url: string;
  };
  categories: [
    {
      category: string;
      slug: string;
    },
  ];
}

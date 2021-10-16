const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export interface Author {
  name: string
  biography: string
  twitterId: string
  gitHubId: string
  profilePhoto: {
    fields: {
      file: {
        url: string
      }
    }
  }
}

export interface Category {
  sys: {
    id: string
  }
  fields: {
    title: string
  }
}

export interface Post {
  title: string
  slug: string
  body: string
  date: string
  category: Category[]
  heroPhoto: {
    fields: {
      file: {
        url: string
      }
    }
  }
  author: {
    fields: Author
  }
}

const getPostContentId = async () => {
  const contentType = await client.getContentTypes();
  return contentType.items.find((contentTypeItem: any) => contentTypeItem.name === 'Post').sys.id;
};

export const getPosts = async (options = {}): Promise<{ fields: Post }[]> => {
  const postContentId = await getPostContentId();
  const entries = await client.getEntries({ content_type: postContentId, ...options });
  return entries.items;
};

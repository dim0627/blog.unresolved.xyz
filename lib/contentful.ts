const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

interface Post {
  title: string
  slug: string
  body: string
  heroPhoto: {
    fields: {
      file: {
        url: string
      }
    }
  }
  author: {
    fields: {
      name: string
    }
  }
}

const getPostContentId = async () => {
  const contentType = await client.getContentTypes();
  return contentType.items.find((contentTypeItem) => contentTypeItem.name === 'Post').sys.id;
};

export const getPosts = async (options = {}): Promise<{ fields: Post }[]> => {
  const postContentId = await getPostContentId();
  const entries = await client.getEntries({ content_type: postContentId, ...options });
  return entries.items;
};

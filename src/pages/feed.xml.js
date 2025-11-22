import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Bière Sécu Rennes',
    description: 'Événement Bière Sécu Renne',
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.description.join(' | '),
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
    customData: '<language>fr-FR/language>',
    canonicalUrl: 'https://bieresecu.bzh',
  });
}

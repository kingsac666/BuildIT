import { useEffect } from 'react';

const upsertMetaTag = ({ name, property, content }) => {
  const attribute = name ? 'name' : 'property';
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let tag = document.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name || property);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

const Seo = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = '/cover.png',
  ogType = 'website',
}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      upsertMetaTag({ name: 'description', content: description });
    }

    const resolvedOgTitle = ogTitle || title;
    const resolvedOgDescription = ogDescription || description;

    if (resolvedOgTitle) {
      upsertMetaTag({ property: 'og:title', content: resolvedOgTitle });
    }

    if (resolvedOgDescription) {
      upsertMetaTag({ property: 'og:description', content: resolvedOgDescription });
    }

    upsertMetaTag({ property: 'og:image', content: ogImage });
    upsertMetaTag({ property: 'og:type', content: ogType });
  }, [title, description, ogTitle, ogDescription, ogImage, ogType]);

  return null;
};

export default Seo;

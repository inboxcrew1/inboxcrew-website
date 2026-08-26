import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'InboxCrew — Build. Brand. Grow. | Digital Agency & Customer Support',
  description = 'InboxCrew is a creative digital agency and customer support outsourcing partner helping businesses build websites, e-commerce, brand systems, and grow online.',
  canonicalPath = '',
  ogImage = 'https://inboxcrew.in/assets/images/hero-visual.png',
  ogType = 'website',
  schema,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical Tag
    const canonicalUrl = `https://inboxcrew.in${canonicalPath}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Update OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    // 5. Update Twitter Tags
    const twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);

    const twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);

    // 6. Inject Dynamic JSON-LD Schema if provided
    let dynamicSchemaScript = document.getElementById('dynamic-page-schema');
    if (schema) {
      if (!dynamicSchemaScript) {
        dynamicSchemaScript = document.createElement('script');
        dynamicSchemaScript.id = 'dynamic-page-schema';
        dynamicSchemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(dynamicSchemaScript);
      }
      dynamicSchemaScript.textContent = JSON.stringify(schema);
    } else if (dynamicSchemaScript) {
      dynamicSchemaScript.remove();
    }
  }, [title, description, canonicalPath, ogImage, ogType, schema]);

  return null;
};

import { useEffect } from "react";

const BASE_OG_IMAGE = "/og-card.jpg";

interface PageMetaProps {
  title: string;
  description: string;
}

export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attrPair: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrVal] = attrPair.split("=");
        el.setAttribute(attrName, attrVal.replace(/"/g, ""));
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta('meta[name="description"]',         "name=description",         description);
    setMeta('meta[property="og:title"]',        "property=og:title",        title);
    setMeta('meta[property="og:description"]',  "property=og:description",  description);
    setMeta('meta[property="og:image"]',        "property=og:image",        BASE_OG_IMAGE);
    setMeta('meta[name="twitter:title"]',       "name=twitter:title",       title);
    setMeta('meta[name="twitter:description"]', "name=twitter:description", description);
    setMeta('meta[name="twitter:image"]',       "name=twitter:image",       BASE_OG_IMAGE);
  }, [title, description]);

  return null;
}

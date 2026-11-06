import { useEffect } from "react";

/** Applies the page title and meta description (from site.json). */
export default function useDocumentMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    if (!description) return;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = description;
  }, [title, description]);
}

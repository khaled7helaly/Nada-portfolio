import { site } from "@/data";

/** Link for the resume, or null while site.json has no resume.url. */
export const resumeLink = site.resume?.url
  ? { label: site.resume.label || "resume", href: site.resume.url }
  : null;

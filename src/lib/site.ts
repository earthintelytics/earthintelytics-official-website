/**
 * Site settings: where each product lives and how to reach us. Product addresses come from the build
 * (VITE_FARMINTELYTICS_URL, VITE_MINEINTELYTICS_URL); until they are set, the buttons lead to the contact form.
 */
export const CONTACT_EMAIL: string = import.meta.env.VITE_CONTACT_EMAIL || "hello@earthintelytics.com";

export const PRODUCT_LINKS = {
  farmintelytics: (import.meta.env.VITE_FARMINTELYTICS_URL as string) || "#contact",
  mineintelytics: (import.meta.env.VITE_MINEINTELYTICS_URL as string) || "#contact",
};

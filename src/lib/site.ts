/**
 * Site settings: where FarmIntelytics lives and how to reach us. Its address comes from the build
 * (VITE_FARMINTELYTICS_URL); until it is set, the buttons lead to the contact form.
 */
export const CONTACT_EMAIL: string = import.meta.env.VITE_CONTACT_EMAIL || "hello@earthintelytics.com";

export const PRODUCT_LINKS = {
  farmintelytics: (import.meta.env.VITE_FARMINTELYTICS_URL as string) || "#contact",
};

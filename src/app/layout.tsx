import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shop | The most amazing way to shop online",
  description: "Shop from top brands, earn exclusive rewards, and track your packages all in one place. Now available on iOS, Android, and web.",
  other: {
    "viewport": "width=device-width, initial-scale=1.0, maximum-scale=1",
    "robots": "max-image-preview:large",
    "google-site-verification": "__ro0yTOmc_xRHK3YoVLhazmMwX7W283zP489VgSO3Q",
    "theme-color": "#ffffff",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/shop-assets/static_uploads/shoplift/favicon.png" />
        <link rel="stylesheet" href="/shop-client/production/assets/root-IOgT8UTf.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/Toast-CU7WjCd4.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/ShopSpinner-Bw88dqVZ.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/variantColors-q5VNG81N.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/IconButton-hBMFb2DH.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/FeedCard-TNO-Ak_c.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/ReviewStars-gQKICgb7.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/FeedCard-B5D91v5q.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/Carousel-1OeCvGh1.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/PageLayout-C9v9U5Y4.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/AutoPaginationFooter-vNzeRvVy.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/Section-UhSVu5WV.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/Omnibox-46pM9Pz3.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/swiper-vL0Q9Dr-.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/pagination-DE0q59Ew.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/tailwind-ovnuWbQh.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/global-DMCcQaEN.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/search-B5KPQgFS.css" />
        <link rel="stylesheet" href="/shop-client/production/assets/_index-sXxtwDVx.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

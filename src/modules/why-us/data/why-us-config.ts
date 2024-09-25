import { WhyUsPageConfig } from "../types";

export const pageConfig: WhyUsPageConfig[] = [
  {
    title: "Over 90,000 content ready. Stream instantly.",
    label: "1 of 2",
    contentCards: [
      {
        type: "image",
        image: {
          src: "https://picsum.photos/200/300",
          alt: "test 1",
        },
      },
      {
        type: "image",
        image: {
          src: "https://picsum.photos/200/300",
          alt: "test 2",
        },
      },
      {
        type: "image",
        image: {
          src: "https://picsum.photos/200/300",
          alt: "test 3",
        },
      },
      {
        type: "image",
        image: {
          src: "https://picsum.photos/200/300",
          alt: "test 4",
        },
      },
      {
        type: "image",
        image: {
          src: "https://picsum.photos/200/300",
          alt: "test 5",
        },
      },
      {
        type: "image",
        image: {
          src: "https://picsum.photos/200/300",
          alt: "test 6",
        },
      },
      {
        type: "image",
        image: {
          src: "https://picsum.photos/200/300",
          alt: "test 7",
        },
      },
      {
        type: "image",
        image: {
          src: "https://picsum.photos/200/300",
          alt: "test 8",
        },
      },
    ],
    exploreMoreCard: {
      text: "Explore more",
      onClick: () => {},
    },
    links: [
      {
        text: "Link 1",
        link: "/",
      },
      {
        text: "Link 2",
        link: "/",
      },
    ],
  },
  {
    title: "Favourite apps, flexible choices, all in one.",
    label: "2 of 2",
    contentCards: [
      {
        type: "info",
        title: {
          text: "Apps bundled with 1",
          icon: {
            src: "https://picsum.photos/200/300",
            alt: "test",
          },
        },
        badge: [
          {
            icon: {
              src: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/icons/group.svg",
              alt: "test",
            },
            text: "<span style='color:#01BF55'>Savings up to RM24/mth</span>",
            bgColor: "linear-gradient(140.08deg, #FFF9D3 -3.7%, #C3F2D7 105.58%)",
          },
          {
            icon: {
              src: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/icons/group.svg",
              alt: "test2",
            },
            text: "<span style='color:#FC0114'>Hassle free, all-in-one bill</span>",
            bgColor: "linear-gradient(140.08deg, #FFF9D3 -3.7%, #FFE6CC 105.58%)",
          },
        ],
        info: [
          {
            icon: {
              src: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/icons/group.svg",
              alt: "test",
            },
            text: "Cancel anytime",
          },
          {
            icon: {
              src: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/icons/group.svg",
              alt: "test",
            },
            text: "Flexibility to switch app subscription",
          },
          {
            icon: {
              src: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/icons/group.svg",
              alt: "test",
            },
            text: "Choose from over 10",
          },
        ],
      },
      {
        type: "app",
        icon: {
          src: "https://picsum.photos/200/300",
          alt: "test",
        },
        price: {
          display: "+RM00.00/mth",
          rrp: "RRP: RM0.00",
        },
        title: "Netflix 1",
        description: "Watch your favourite movies and TV shows",
        poster: {
          src: "https://picsum.photos/200/300",
          alt: "test",
        },
        ctaButton: {
          text: "Get it with Astro ONE",
          onClick: () => {},
        },
      },
      {
        type: "app",
        icon: {
          src: "https://picsum.photos/200/300",
          alt: "test",
        },
        price: {
          display: "+RM00.00/mth",
          rrp: "RRP: RM0.00",
        },
        title: "Netflix 2",
        description: "Watch your favourite movies and TV shows",
        poster: {
          src: "https://picsum.photos/200/300",
          alt: "test",
        },
        ctaButton: {
          text: "Get it with Astro ONE",
          onClick: () => {},
        },
      },
      {
        type: "app",
        icon: {
          src: "https://picsum.photos/200/300",
          alt: "test",
        },
        price: {
          display: "+RM00.00/mth",
          rrp: "RRP: RM0.00",
        },
        title: "Netflix 3",
        description: "Watch your favourite movies and TV shows",
        poster: {
          src: "https://picsum.photos/200/300",
          alt: "test",
        },
        ctaButton: {
          text: "Get it with Astro ONE",
          onClick: () => {},
        },
      },
      {
        type: "app",
        icon: {
          src: "https://picsum.photos/200/300",
          alt: "test",
        },
        price: {
          display: "+RM00.00/mth",
          rrp: "RRP: RM0.00",
        },
        title: "Netflix 4",
        description: "Watch your favourite movies and TV shows",
        poster: {
          src: "https://picsum.photos/200/300",
          alt: "test",
        },
        ctaButton: {
          text: "Get it with Astro ONE",
          onClick: () => {},
        },
      },
    ],
    exploreMoreCard: {
      text: "Explore more",
      onClick: () => {},
    },
    links: [
      {
        text: "Link 1",
        link: "/",
      },
      {
        text: "Link 2",
        link: "/",
      },
      {
        text: "Link 3 Overflow wwwwwwwwwwwwwwwwwww",
        link: "/",
      },
    ],
  },
];

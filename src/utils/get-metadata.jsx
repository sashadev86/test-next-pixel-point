const SITE_URL = process.env.TEST_NEXT_PIXEL_POINT_SITE_URL;
const SITE_NAME = 'Pixel Point';
const DEFAULT_IMAGE_PATH = '/images/meta-social.png';

export default function getMetadata({
  title = 'Pixel Point',
  description = "Pixel Point test task",
  robotsNoindex,
  pathname = '',
  imagePath = DEFAULT_IMAGE_PATH,
  type = 'website',
} = {}) {
  const canonicalUrl = SITE_URL + pathname;
  const imageUrl = imagePath.startsWith('http') ? imagePath : SITE_URL + imagePath;
  const robots = robotsNoindex === 'noindex' ? { index: false } : null;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    metadataBase: new URL(SITE_URL),
    robots,
    // FIXME: Generate favicons with Favpie - https://github.com/pixel-point/favpie
    // manifest: `${SITE_URL}/manifest.json`,
    // icons: {
    //   icon: '/favicon/favicon.png',
    //   apple: [
    //     { url: '/favicon/favicon.png' },
    //     { url: '/favicon/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    //     { url: '/favicon/favicon-72x72.png', sizes: '72x72', type: 'image/png' },
    //     { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    //     { url: '/favicon/favicon-144x144.png', sizes: '144x144', type: 'image/png' },
    //     { url: '/favicon/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
    //     { url: '/favicon/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
    //     { url: '/favicon/favicon-384x384.png', sizes: '384x384', type: 'image/png' },
    //     { url: '/favicon/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    //   ],
    // },
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@TwitterHandle',
      title,
      description,
      image: imageUrl,
    },
  };
}

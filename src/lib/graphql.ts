import { GraphQLClient } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://MYDOMAIN.com/graphql';

const client = new GraphQLClient(API_URL, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'application/json',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://rainbowdhammafoundation.org/',
  },
});

export interface Event {
  slug: string;
  title: string;
  date: string;
  events: {
    eventDate: string;
    eventLocation: string;
    eventDescription: string;
    eventBanner: {
      node: {
        sourceUrl: string;
      };
    };
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}

export const getAllEvents = async (): Promise<Event[]> => {
  const query = `
    query GetAllEvents {
      events {
        nodes {
          slug
          title
          date
          events {
            eventDate
            eventLocation
            eventDescription
            eventBanner {
              node {
                sourceUrl
              }
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const data = await client.request(query);
  return data.events.nodes;
};

export const getEventBySlug = async (slug: string) => {
  const query = `
    query GetEventBySlug {
      event(id: "${slug}", idType: SLUG) {
        title
        date
        events {
          eventDate
          eventLocation
          eventDescription
          eventBanner {
            node {
              sourceUrl
            }
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;

  const data = await client.request(query);
  return data.event;
};

// Gallery Types and Functions
export interface GalleryImage {
  sourceUrl: string;
  altText: string;
}

export interface Gallery {
  id: string;
  title: string;
  galleryDetails: {
    galleryImages: {
      node: GalleryImage;
    };
  };
}

export const getAllGalleries = async (): Promise<Gallery[]> => {
  const query = `
    query GetGalleries {
      galleries {
        nodes {
          id
          title
          galleryDetails {
            galleryImages {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await client.request(query);
    return data.galleries.nodes;
  } catch (error) {
    console.error('Error fetching galleries:', error);
    return [];
  }
};


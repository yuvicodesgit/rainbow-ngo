import { GraphQLClient } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || '';

if (!API_URL) {
  console.warn('⚠️ NEXT_PUBLIC_WORDPRESS_API_URL is not defined. Using mock data.');
} else {
  // Mask sensitive parts of URL in logs if needed, but here it's public
  console.log(`📡 Connecting to WordPress API: ${API_URL}`);
}

const client = new GraphQLClient(API_URL || 'https://placeholder-url.com', {
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

const MOCK_EVENTS: Event[] = [
  {
    slug: 'mock-event-1',
    title: 'Community Health Camp',
    date: '2023-12-15T10:00:00',
    events: {
      eventDate: 'December 15, 2023',
      eventLocation: 'Guwahati, Assam',
      eventDescription: 'Free health checkup camp for the community.',
      eventBanner: {
        node: {
          sourceUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
        },
      },
    },
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1576091160399-112da8d60f29?auto=format&fit=crop&q=80',
      },
    },
  },
  {
    slug: 'mock-event-2',
    title: 'Education for All Drive',
    date: '2024-01-20T09:00:00',
    events: {
      eventDate: 'January 20, 2024',
      eventLocation: 'Rural Assam',
      eventDescription: 'Distributing study materials to underprivileged children.',
      eventBanner: {
        node: {
          sourceUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80',
        },
      },
    },
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
      },
    },
  },
];

export const getAllEvents = async (): Promise<Event[]> => {
  // If API_URL is empty, return mock data
  if (!API_URL) {
    return MOCK_EVENTS;
  }

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

  try {
    const data = await client.request(query);
    return data.events.nodes;
  } catch (error) {
    console.error('❌ Error fetching events:', error);
    // If we have an API_URL but it fails, we still return MOCK_EVENTS 
    // to keep the UI from breaking, but the log will show the error.
    return MOCK_EVENTS;
  }
};

export const getEventBySlug = async (slug: string) => {
  if (!API_URL) {
    return MOCK_EVENTS.find((e) => e.slug === slug) || null;
  }

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

  try {
    const data = await client.request(query);
    return data.event;
  } catch (error) {
    console.error(`❌ Error fetching event ${slug}:`, error);
    return MOCK_EVENTS.find((e) => e.slug === slug) || null;
  }
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
  if (!API_URL) {
    return [];
  }

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
    console.error('❌ Error fetching galleries:', error);
    return [];
  }
};


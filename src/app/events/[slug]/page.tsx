import { getEventBySlug, getAllEvents } from '@/lib/graphql';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
    const events = await getAllEvents();
    return events.map((event: any) => ({
        slug: event.slug,
    }));
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = await getEventBySlug(slug);

    if (!event) {
        notFound();
    }

    const imgUrl = event.events?.eventBanner?.node?.sourceUrl || event.featuredImage?.node?.sourceUrl;
    const date = event.events?.eventDate ? new Date(event.events.eventDate).toLocaleDateString() : new Date(event.date).toLocaleDateString();

    return (
        <>
            <Header />
            <main className="event-single-page">
                <div className="container" style={{ padding: '120px 20px 60px' }}>
                    {/* Banner */}
                    {imgUrl && (
                        <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '40px', borderRadius: '20px', overflow: 'hidden' }}>
                            <Image
                                src={imgUrl}
                                alt={event.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    )}

                    {/* Title & Date */}
                    <div className="event-header" style={{ marginBottom: '30px' }}>
                        <span className="event-date" style={{ color: '#ff6b35', fontWeight: 'bold', textTransform: 'uppercase' }}>{date}</span>
                        <h1 style={{ fontSize: '3rem', margin: '10px 0' }}>{event.title}</h1>
                        {event.events?.eventLocation && (
                            <p className="event-location" style={{ fontSize: '1.2rem', color: '#666' }}>
                                <i className="fas fa-map-marker-alt" style={{ marginRight: '10px' }}></i>
                                {event.events.eventLocation}
                            </p>
                        )}
                    </div>

                    {/* Description */}
                    <div
                        className="event-description"
                        dangerouslySetInnerHTML={{ __html: event.events?.eventDescription || '' }}
                        style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}

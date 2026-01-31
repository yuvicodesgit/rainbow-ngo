import { getAllEvents } from '@/lib/graphql';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const revalidate = 60;

export default async function EventsPage() {
    const events = await getAllEvents();

    return (
        <>
            <Header />
            <main>
                <div className="section" style={{ paddingTop: '120px', minHeight: '80vh' }}>
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>All Events</h2>
                            <div className="divider"></div>
                        </div>

                        {events.length === 0 ? (
                            <p className="text-center">No upcoming events found.</p>
                        ) : (
                            <div className="events-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                                gap: '30px',
                                marginTop: '40px'
                            }}>
                                {events.map((event) => {
                                    const imgUrl = event.events?.eventBanner?.node?.sourceUrl || event.featuredImage?.node?.sourceUrl || '/placeholder.jpg';
                                    const date = event.events?.eventDate ? new Date(event.events.eventDate).toLocaleDateString() : new Date(event.date).toLocaleDateString();
                                    const desc = event.events?.eventDescription?.replace(/<[^>]+>/g, '').substring(0, 100) + '...' || '';

                                    return (
                                        <Link href={`/events/${event.slug}`} key={event.slug} style={{ display: 'block', textDecoration: 'none' }}>
                                            <div className="activity-card" style={{ height: '100%' }}>
                                                <img src={imgUrl} alt={event.title} style={{ height: '220px', width: '100%', objectFit: 'cover' }} />
                                                <div className="activity-content">
                                                    <span className="date" style={{ color: '#FF6B35', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>{date}</span>
                                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#1F2937' }}>{event.title}</h4>
                                                    {event.events?.eventLocation && (
                                                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>
                                                            <i className="fas fa-map-marker-alt" style={{ marginRight: '5px' }}></i>
                                                            {event.events.eventLocation}
                                                        </p>
                                                    )}
                                                    <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: '1.5' }}>{desc}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

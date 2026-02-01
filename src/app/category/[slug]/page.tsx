import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;

    // Format the slug for display (e.g., "blog-english" -> "Blog English")
    const formattedTitle = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <>
            <Header />
            <main>
                <div className="section" style={{ paddingTop: '150px', minHeight: '60vh' }}>
                    <div className="container">
                        <div className="section-header text-center">
                            <h1>{formattedTitle}</h1>
                            <div className="divider"></div>
                        </div>

                        <div className="content-area text-center" style={{ marginTop: '50px' }}>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>
                                Content for {formattedTitle} is coming soon.
                            </p>
                            {/* 
                                This section is intentionally left blank for now so that 
                                future admin can populate it via WordPress.
                            */}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

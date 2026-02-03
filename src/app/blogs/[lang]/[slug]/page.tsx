import { notFound } from 'next/navigation';
import { getBlogBySlug } from '@/lib/graphql';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogDetailPageProps {
    params: Promise<{
        lang: string;
        slug: string;
    }>;
}

export const revalidate = 60; // ISR

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { lang, slug } = await params;
    const blog = await getBlogBySlug(lang, slug);

    if (!blog) {
        notFound();
    }

    const { title, featuredImage, blogDetails } = blog;
    const { authorName, publishDate, mainBody } = blogDetails;

    const heroImage = featuredImage?.node?.sourceUrl || '/placeholder-blog.jpg';

    return (
        <>
            <Header />
            <main className="blog-detail-page">
                {/* Blog Hero section */}
                <section className="blog-detail-hero">
                    <div className="blog-detail-hero-bg">
                        <img src={heroImage} alt={title} />
                    </div>
                    <div className="blog-detail-hero-overlay"></div>
                    <div className="blog-detail-hero-content">
                        <h1 className="blog-detail-title">{title}</h1>
                        <div className="blog-detail-meta">
                            <span className="author">
                                <i className="fas fa-user-circle"></i> {authorName}
                            </span>
                            <span className="date">
                                <i className="far fa-calendar-alt"></i> {new Date(publishDate).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </section>

                {/* Blog Content Section */}
                <section className="blog-content-section">
                    <div className="container">
                        <div className="blog-main-content">
                            <div
                                className="blog-body-html"
                                dangerouslySetInnerHTML={{ __html: mainBody || '' }}
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

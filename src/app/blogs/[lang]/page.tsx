import Link from 'next/link';
import { getAllBlogs } from '@/lib/graphql';
import BlogCard from '@/components/BlogCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogListPageProps {
    params: Promise<{
        lang: string;
    }>;
}

export const revalidate = 60; // ISR

export default async function BlogListPage({ params }: BlogListPageProps) {
    const { lang } = await params;
    const blogs = await getAllBlogs(lang);

    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

    return (
        <>
            <Header />
            <main className="section blog-listing-page">
                <div className="container">
                    <div className="section-header text-center" style={{ marginTop: '80px' }}>
                        <h1 className="section-title">Blog {capitalize(lang)}</h1>
                        <div className="divider"></div>
                        <p className="section-subtitle">
                            Insights and stories from our {lang} community.
                        </p>
                    </div>

                    {blogs.length > 0 ? (
                        <div className="blogs-grid">
                            {blogs.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} lang={lang} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center" style={{ padding: '60px 0' }}>
                            <p>No blogs found for this language.</p>
                            <Link href="/" className="btn btn-secondary" style={{ marginTop: '20px' }}>
                                Back to Home
                            </Link>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

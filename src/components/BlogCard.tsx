"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Blog } from '@/lib/graphql';

export interface BlogCardProps {
    blog: Blog;
    lang: string;
}

export default function BlogCard({ blog, lang }: BlogCardProps) {
    const { title, slug, featuredImage, blogDetails } = blog;
    const { authorName, publishDate, mainBody } = blogDetails;

    const imageUrl = featuredImage?.node?.sourceUrl || '/placeholder-blog.jpg';

    // Helper to strip HTML and truncate for description
    const stripHtml = (html: string) => {
        if (!html) return '';
        return html.replace(/<[^>]*>/g, '').substring(0, 120) + '...';
    };

    return (
        <motion.div
            className="blog-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Link href={`/blogs/${lang}/${slug}`} className="blog-card-link">
                <div className="blog-card-img-wrapper">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="blog-card-img"
                        loading="lazy"
                    />
                </div>
                <div className="blog-card-content">
                    <h3 className="blog-card-title">{title}</h3>
                    <p className="blog-card-description">{stripHtml(mainBody)}</p>
                    <div className="blog-card-meta">
                        <span className="blog-card-author">
                            <i className="fas fa-user-circle"></i> {authorName}
                        </span>
                        <div className="blog-card-bottom">
                            <span className="blog-card-date">
                                <i className="far fa-calendar-alt"></i> {new Date(publishDate).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

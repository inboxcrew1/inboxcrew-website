import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { BLOG_POSTS } from '../data/blogData';
import { TiltCard3D } from '../components/TiltCard3D';
import { BookOpen, Clock, Calendar, ArrowRight, Terminal } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'InboxCrew Insights & Guides',
    description: 'Expert guides on website development costs in India, local SEO, customer support outsourcing, and digital growth strategies.',
    url: 'https://inboxcrew.in/blog',
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedDate,
      author: {
        '@type': 'Organization',
        name: post.author,
      },
    })),
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono select-none pt-28 pb-20 overflow-hidden">
      <SEOHead
        title="Insights, Pricing Guides & Local SEO Articles — InboxCrew"
        description="Read transparent guides on website development costs in India, local SEO strategies for Bulandshahr & Noida, and customer support outsourcing."
        canonicalPath="/blog"
        schema={blogSchema}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span>KNOWLEDGE BASE & GUIDES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase mb-6 font-sans">
            INSIGHTS & STRATEGY
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Honest, practical guides on web engineering, digital marketing ROI, transparent pricing, and local business scaling in India.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {BLOG_POSTS.map((post) => (
            <TiltCard3D key={post.slug} maxTilt={5} glareOpacity={0.15} className="h-full rounded-2xl">
              <Link
                to={`/blog/${post.slug}`}
                className="h-full p-6 sm:p-7 rounded-2xl border border-blue-500/25 bg-zinc-950/80 hover:border-blue-400/50 flex flex-col justify-between text-left transition-all group block"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[11px] text-zinc-400 font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-300">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-white uppercase font-sans mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-blue-500/15 flex items-center justify-between text-xs text-zinc-400">
                  <span>{post.publishedDate}</span>
                  <span className="text-blue-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </TiltCard3D>
          ))}
        </div>

      </div>
    </div>
  );
};

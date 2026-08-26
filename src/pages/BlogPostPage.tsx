import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { BLOG_POSTS } from '../data/blogData';
import { BookOpen, Clock, Calendar, ArrowRight, User, Share2, Sparkles, CheckCircle2 } from 'lucide-react';

interface BlogPostPageProps {
  onOpenContactWithPackage: (pkg?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onOpenContactWithPackage }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const postSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'InboxCrew',
      logo: {
        '@type': 'ImageObject',
        url: 'https://inboxcrew.in/assets/images/inboxcrew-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://inboxcrew.in/blog/${post.slug}`,
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono select-none pt-28 pb-20 overflow-hidden">
      <SEOHead
        title={`${post.title} — InboxCrew Guide`}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        schema={postSchema}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10 text-left">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-blue-400">Blog</Link>
          <span>/</span>
          <span className="text-blue-400 font-bold truncate max-w-xs">{post.category}</span>
        </div>

        {/* Post Meta Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            {post.category}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase mb-6 font-sans leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 border-y border-blue-500/20 py-3 font-mono">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-400" />
              {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              {post.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none text-zinc-300 text-sm sm:text-base leading-relaxed space-y-6 mb-16 font-mono">
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 text-blue-200 text-xs italic">
            {post.excerpt}
          </div>

          {post.content.split('\n\n').map((paragraph, pIdx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h2 key={pIdx} className="text-xl sm:text-2xl font-bold text-white font-sans uppercase pt-4 border-b border-blue-500/20 pb-2">
                  {paragraph.replace('### ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('* ')) {
              return (
                <ul key={pIdx} className="space-y-2 list-disc pl-5">
                  {paragraph.split('\n').map((line, lIdx) => (
                    <li key={lIdx} className="text-xs sm:text-sm text-zinc-300">
                      {line.replace('* ', '')}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith('---')) {
              return <hr key={pIdx} className="border-blue-500/20 my-6" />;
            }
            return (
              <p key={pIdx} className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Related Services CTA Box */}
        <div className="p-8 rounded-2xl border border-blue-500/40 bg-zinc-950/90 shadow-[0_0_40px_rgba(0,102,255,0.2)] mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>DISCUSS THIS STRATEGY FOR YOUR BUSINESS</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-sans mb-3">
            NEED A HIGH-PERFORMANCE WEBSITE OR DIGITAL ENGINE?
          </h3>
          <p className="text-xs text-zinc-300 leading-relaxed mb-6">
            Our engineering and growth team helps businesses implement these exact strategies with transparent pricing starting from ₹6,000 / $69.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenContactWithPackage('Project Inquiry from Article')}
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(0,102,255,0.4)]"
            >
              Get Free Consultation
            </button>
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-full bg-zinc-900 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              View Verified Pricing
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

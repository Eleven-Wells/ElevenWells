import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import {
  BsHeart,
  BsHeartFill,
  BsEye,
  BsCalendar3,
  BsArrowLeft,
  BsClock
} from 'react-icons/bs';
import { ConnectionFailed } from '../sections/FeaturedPosts.jsx';

// Shimmer Loading for Post
const PostSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-96 bg-gray-200 rounded-2xl mb-8" />
    <div className="max-w-4xl mx-auto">
      <div className="h-4 bg-gray-200 rounded w-32 mb-4" />
      <div className="h-10 bg-gray-200 rounded w-3/4 mb-4" />
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-24" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
      </div>
    </div>
  </div>
);

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(0);
  const [isLiking, setIsLiking] = useState(false);

  const fetchPost = async () => {
    setIsLoading(true);
    setHasError(false);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch(`http://localhost:3000/api/v1/blogs/posts/${slug}`, {
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }

      const data = await response.json();
      setPost(data.post);
      setLocalLikes(data.post.likes);
      setIsLoading(false);

      // Check if user has liked this post (from localStorage)
      const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
      setIsLiked(likedPosts.includes(slug));
    } catch (error) {
      clearTimeout(timeoutId);
      console.error('Error fetching post:', error);
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setIsRetrying(true);
    fetchPost().finally(() => {
      setIsRetrying(false);
    });
  };

  const handleLike = async () => {
    if (isLiking) return;

    setIsLiking(true);
    const endpoint = isLiked ? 'unlike' : 'like';

    try {
      const response = await fetch(`http://localhost:3000/api/posts/${slug}/${endpoint}`, {
        method: 'POST'
      });

      if (!response.ok) throw new Error('Failed to update like');

      const data = await response.json();
      setLocalLikes(data.likes);
      setIsLiked(!isLiked);

      // Update localStorage
      const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
      if (isLiked) {
        const updated = likedPosts.filter(s => s !== slug);
        localStorage.setItem('likedPosts', JSON.stringify(updated));
      } else {
        likedPosts.push(slug);
        localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
      }
    } catch (error) {
      console.error('Error updating like:', error);
    } finally {
      setIsLiking(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <PostSkeleton />
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <ConnectionFailed
            onRetry={handleRetry}
            isRetrying={isRetrying}
            message="Unable to load this post. Please check your connection and try again."
          />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Post Not Found</h2>
          <p className="text-gray-600 mb-6">The post you're looking for doesn't exist.</p>
          <a href="/" className="text-green-700 font-semibold hover:text-green-800">
            ← Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.a
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 font-medium"
          whileHover={{ x: -5 }}
        >
          <BsArrowLeft className="mr-2" />
          Back to Posts
        </motion.a>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full h-96 rounded-2xl overflow-hidden mb-8 shadow-lg"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4"
          >
            {post.category}
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200"
          >
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-linear-to-br from-green-400 to-green-600">
                {post.author?.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white font-bold">
                    {post.author?.name?.charAt(0) || 'A'}
                  </div>
                )}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author?.name || 'Anonymous'}</p>
                <p className="text-sm text-gray-500">Author</p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-gray-600">
              <BsCalendar3 className="text-lg" />
              <span className="text-sm">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>

            {/* Reading Time */}
            <div className="flex items-center gap-2 text-gray-600">
              <BsClock className="text-lg" />
              <span className="text-sm">
                {Math.ceil(post.content.split(' ').length / 200)} min read
              </span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-2 text-gray-600">
              <BsEye className="text-lg" />
              <span className="text-sm font-medium">{post.views.toLocaleString()} views</span>
            </div>

            {/* Likes with Action */}
            <motion.button
              onClick={handleLike}
              disabled={isLiking}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${isLiked
                ? 'bg-red-50 text-red-600 hover:bg-red-100'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                } disabled:opacity-50`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isLiked ? (
                  <motion.div
                    key="filled"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <BsHeartFill className="text-lg" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="outline"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <BsHeart className="text-lg" />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="text-sm">{localLikes.toLocaleString()}</span>
            </motion.button>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-700 mb-8 leading-relaxed font-medium"
          >
            {post.description}
          </motion.p>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-gray-700 leading-relaxed space-y-4">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Action Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Did you enjoy this post?</span>
                <motion.button
                  onClick={handleLike}
                  disabled={isLiking}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${isLiked
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-green-800 text-white hover:bg-green-900'
                    } disabled:opacity-50`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLiked ? <BsHeartFill /> : <BsHeart />}
                  {isLiked ? 'Liked' : 'Like this post'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
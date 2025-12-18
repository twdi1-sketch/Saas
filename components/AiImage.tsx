import React, { useState, useEffect } from 'react';
import { generateImage } from '../services/geminiService';
import { Loader2, Image as ImageIcon } from 'lucide-react';

interface AiImageProps {
  prompt: string;
  className?: string;
  alt?: string;
  fallback?: React.ReactNode;
  overlay?: boolean;
}

const AiImage: React.FC<AiImageProps> = ({ prompt, className = '', alt = 'AI Generated Image', fallback, overlay = false }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchImage = async () => {
      // Check session storage first to avoid re-generating on every render
      const cacheKey = `ai-img-${prompt.substring(0, 20)}`;
      const cached = sessionStorage.getItem(cacheKey);
      
      if (cached) {
        setImageUrl(cached);
        setLoading(false);
        return;
      }

      try {
        const url = await generateImage(prompt);
        if (mounted) {
          if (url) {
            setImageUrl(url);
            sessionStorage.setItem(cacheKey, url);
          } else {
            setError(true);
          }
        }
      } catch (e) {
        if (mounted) setError(true);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchImage();

    return () => {
      mounted = false;
    };
  }, [prompt]);

  if (loading) {
    return (
      <div className={`bg-neutral-900 animate-pulse flex items-center justify-center ${className}`}>
        <Loader2 className="w-8 h-8 text-brand-600 animate-spin" />
      </div>
    );
  }

  if (error || !imageUrl) {
    return fallback ? <>{fallback}</> : (
      <div className={`bg-neutral-900 flex items-center justify-center ${className}`}>
        <ImageIcon className="w-8 h-8 text-neutral-700" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img 
        src={imageUrl} 
        alt={alt} 
        className="w-full h-full object-cover transition-opacity duration-700 opacity-0 animate-in fade-in" 
        onLoad={(e) => (e.currentTarget.style.opacity = '1')}
      />
      {overlay && (
        <div className="absolute inset-0 bg-neutral-950/50 mix-blend-multiply"></div>
      )}
    </div>
  );
};

export default AiImage;
"use client";

import { Skeleton } from "./ui/skeleton";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";

import { useFormattedDate } from "@/hooks";

// import LikeCounter from "./like-counter";
// import ViewCounter from "./view-counter";

import { BlogPostCore } from "@/types";
import { getStrapiMedia } from "@/lib/strapi";

const PostCard = (post: BlogPostCore) => {
  const {
    title,
    description,
    cover,
    slug,
    publishedAt: date,
  } = post.attributes;
  const image = getStrapiMedia(cover);

  const formattedDate = useFormattedDate(date, "YYYY-MM-DD");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <Link
      key={post.id}
      href={`/blog/${slug}`}
      className="group relative flex flex-col space-y-3 rounded-2xl border border-accent-2 p-6"
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 [--spotlight:rgba(0,0,0,0.05)] group-hover:opacity-100 dark:[--spotlight:rgba(255,255,255,0.15)]"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              var(--spotlight),
              transparent 80%
            )
          `,
        }}
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        className="rounded-lg"
        width={1280}
        height={720}
        src={image}
        alt={title}
      />
      <div className="flex-grow space-y-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="text-accent-5">{description}</div>
      </div>
      <div className="flex items-center text-sm">
        {formattedDate ? formattedDate : <Skeleton className="h-5 w-10" />}
        &nbsp;/&nbsp; 585 likes &nbsp;/&nbsp; 1840 views
      </div>
    </Link>
  );
};

export default PostCard;

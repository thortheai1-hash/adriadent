"use client";

import { useTranslations } from "next-intl";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviewsData = [
  {
    name: "Aji Margono",
    title: "Local Guide",
    text: "Adriatik is very professional dentist 😁 nice to meet best dentist in Albania 🇦🇱 excellent service and good customer care. Thank you Adriadent",
    rating: 5,
  },
  {
    name: "Oleksii Krasnoshchokov",
    title: "Local Guide",
    text: "Made an implant here. Best clinic in Shkodra! Adriatik and his team are professionals!",
    rating: 5,
  },
  {
    name: "Aldi Uldedaj",
    title: "Patient",
    text: "Extremely professional!! Super attentive and helpful staff!! The clinic is spotless and meticulously maintained. I've been to several dentists, and none have I had a better experience than Dr. Adriatik, a true master of his craft.",
    rating: 5,
  },
  {
    name: "migena joxhe",
    title: "Patient",
    text: "I highly recommend \"Adriadent\"!! We chose it for our family... we had a wonderful experience, not only for the service but also for the great professionalism of the entire staff!!!",
    rating: 5,
  },
  {
    name: "Brikene Dionizi",
    title: "Local Guide",
    text: "Very good service. The first visit was for the children, I couldn't find a dentist who would treat children without causing them fear. In time I have been satisfied, for the children and for myself🙏",
    rating: 5,
  },
  {
    name: "sedat shmidra",
    title: "Local Guide",
    text: "The best in town 👌👌",
    rating: 5,
  }
];

function ReviewCard({ review }: { review: typeof reviewsData[0] }) {
  return (
    <div className="w-[350px] md:w-[400px] flex-shrink-0 bg-white dark:bg-slate-900 border border-border/50 rounded-2xl p-8 mx-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground/80 leading-relaxed mb-6 italic">
        "{review.text}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-foreground">{review.name}</h4>
          <span className="text-xs text-muted-foreground">{review.title}</span>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  const t = useTranslations("Reviews");
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Extend the array so the marquee loop is seamless
  const extendedReviews = [...reviewsData, ...reviewsData];

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap group-hover:[animation-play-state:paused]"
        >
          {extendedReviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

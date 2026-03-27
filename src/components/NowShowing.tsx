import { motion } from 'framer-motion';

const movies = [
  {
    title: 'Aadu 3',
    language: 'Malayalam',
    rating: 'UA',
    poster: '/public/NowShowing/aadu.png',
    times: ['10:00 AM', '1:30 PM', '6:00 PM', '9:30 PM'],
    bookUrl: 'https://in.bookmyshow.com/movies/kalladikode/aadu-3/buytickets/ET00489871',
  },
  {
    title: 'Dhurandhar The Revenge',
    language: 'Malayalam',
    rating: 'UA',
    poster: '/public/NowShowing/durandhar.png',
    times: ['11:00 AM', '2:30 PM', '7:00 PM'],
    bookUrl: 'https://in.bookmyshow.com/movies/kalladikode/dhurandhar-the-revenge/buytickets/ET00478894',
  },
  {
    title: 'Derby',
    language: 'Malayalam',
    rating: 'U',
    poster: '/public/NowShowing/derby.png',
    times: ['10:30 AM', '4:00 PM', '9:00 PM'],
    bookUrl: 'https://in.bookmyshow.com/movies/kalladikode/derby/buytickets/ET00491361',
  },
];

export default function NowShowing() {
  return (
    <section id="now-showing" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-tech text-primary text-xs tracking-[0.3em] uppercase mb-2">What's Playing</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Now Showing</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {movies.map((movie, i) => (
            <motion.div
              key={movie.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer transition-all hover:glow-gold w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm"
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-primary text-primary-foreground text-xs font-bold font-tech">
                  {movie.rating}
                </div>
              </div>

              <div className="p-4 flex flex-col h-[calc(100%-150%)] justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold mb-1">{movie.title}</h3>
                  <span className="text-xs font-tech text-primary mb-3 block">{movie.language}</span>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {movie.times.map((t) => (
                      <span key={t} className="text-[10px] font-tech text-muted-foreground border border-border/50 rounded px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={movie.bookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-gold-bright transition-all active:scale-95"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

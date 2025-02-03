import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

type MediaItem = {
  type: 'video' | 'image';
  url: string;
  thumbnail?: string;
  caption: string;
  sport: string;
};

type Category = {
  name: string;
  items: MediaItem[];
};

export function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const categories: Category[] = [
    {
      name: "Fencing",
      items: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/207561066',
          thumbnail: 'https://images.unsplash.com/photo-1628891890467-b79de43880d4?auto=format&fit=crop&q=80&w=800',
          caption: 'Tournament Finals',
          sport: 'Fencing'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1628891890729-d567d5d85df8?auto=format&fit=crop&q=80&w=800',
          caption: 'Championship Match',
          sport: 'Fencing'
        }
      ]
    },
    {
      name: "Volleyball",
      items: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/183955812',
          thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800',
          caption: 'Tournament Highlights',
          sport: 'Volleyball'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=800',
          caption: 'Inter-College Match',
          sport: 'Volleyball'
        }
      ]
    },
    {
      name: "Basketball",
      items: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/215032415',
          thumbnail: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800',
          caption: 'Championship Finals Highlights',
          sport: 'Basketball'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?auto=format&fit=crop&q=80&w=800',
          caption: 'Team Victory Celebration',
          sport: 'Basketball'
        }
      ]
    },
    {
      name: "Softball",
      items: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/76979871',
          thumbnail: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&q=80&w=800',
          caption: 'Championship Game',
          sport: 'Softball'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?auto=format&fit=crop&q=80&w=800',
          caption: 'Team Practice',
          sport: 'Softball'
        }
      ]
    },
    {
      name: "Yoga",
      items: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/162922029',
          thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
          caption: 'Advanced Poses Workshop',
          sport: 'Yoga'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80&w=800',
          caption: 'Morning Session',
          sport: 'Yoga'
        }
      ]
    },
    {
      name: "Archery",
      items: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/193437771',
          thumbnail: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80&w=800',
          caption: 'Championship Highlights',
          sport: 'Archery'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1511348723620-7f90d44112dc?auto=format&fit=crop&q=80&w=800',
          caption: 'State Competition',
          sport: 'Archery'
        }
      ]
    },
    {
      name: "Badminton",
      items: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/162922029',
          thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
          caption: 'Singles Championship',
          sport: 'Badminton'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=800',
          caption: 'Doubles Tournament',
          sport: 'Badminton'
        }
      ]
    },
    {
      name: "Football",
      items: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/193437771',
          thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800',
          caption: 'Season Highlights',
          sport: 'Football'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=800',
          caption: 'Championship Game',
          sport: 'Football'
        }
      ]
    },
    {
      name: "Cricket",
      items: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/76979871',
          thumbnail: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
          caption: 'Final Match Highlights',
          sport: 'Cricket'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&q=80&w=800',
          caption: 'Tournament Victory',
          sport: 'Cricket'
        }
      ]
    },
    {
      name: "Kabaddi",
      items: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/183955812',
          thumbnail: 'https://images.unsplash.com/photo-1582630699451-bdb31e2d235b?auto=format&fit=crop&q=80&w=800',
          caption: 'Tournament Match',
          sport: 'Kabaddi'
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1582630699459-681d3c951ce0?auto=format&fit=crop&q=80&w=800',
          caption: 'League Finals',
          sport: 'Kabaddi'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-8"> {/* Reduced py-16 to py-8 */}
        <h1 className="text-5xl font-bold text-center text-[#900] mb-8">Sports Gallery</h1> {/* Reduced mb-16 to mb-8 */}

        <div className="space-y-16"> {/* Reduced space-y-24 to space-y-16 */}
          {categories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="scroll-mt-16" id={category.name.toLowerCase()}>
              <h2 className="text-3xl font-bold text-[#900] mb-6 border-b-2 border-[#900] pb-2"> {/* Reduced mb-8 to mb-6 and pb-3 to pb-2 */}
                {category.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Reduced gap-10 to gap-8 */}
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                    onClick={() => setSelectedMedia(item)}
                  >
                    <div className="relative aspect-video">
                      <img 
                        src={item.type === 'video' ? item.thumbnail : item.url} 
                        alt={item.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                          {item.type === 'video' && (
                            <div className="bg-[#900] rounded-full p-3 mb-2 inline-block">
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8 5v10l8-5-8-5z"/>
                              </svg>
                            </div>
                          )}
                          <p className="text-lg font-semibold px-4">{item.caption}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Media Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-5xl w-full">
              <div className="p-6 flex justify-between items-center border-b">
                <div>
                  <h3 className="text-2xl font-semibold">{selectedMedia.caption}</h3>
                  <p className="text-[#900] text-lg">{selectedMedia.sport}</p>
                </div>
                <button 
                  onClick={() => setSelectedMedia(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="aspect-video">
                {selectedMedia.type === 'video' ? (
                  <iframe
                    src={selectedMedia.url}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img 
                    src={selectedMedia.url} 
                    alt={selectedMedia.caption}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
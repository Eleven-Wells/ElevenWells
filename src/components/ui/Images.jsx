import React from 'react';

const Images = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Desktop View - Static Grid */}
      <div className="hidden lg:grid grid-cols-5 gap-3 max-w-6xl mx-auto" style={{ height: '70vh' }}>
        
        {/* Column 1: 2 images stacked */}
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl overflow-hidden" style={{ flex: 1.6 }}>
            <img src="/img6.jpg" alt="Brain" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden flex-1">
            <img src="/img4.jpg" alt="Image 2" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Column 2: Normal image */}
        <div className="rounded-2xl overflow-hidden" style={{ alignSelf: 'flex-end', height: '75%' }}>
          <img src="/img3.jpg" alt="Team meeting" className="w-full h-full object-cover" />
        </div>

        {/* Column 3: Normal image (slightly shorter) */}
        <div className="rounded-2xl overflow-hidden mt-60 " style={{ alignSelf: 'center', height: '50%' }}>
          <img src="/img5.jpg" alt="Cyclists" className="w-full h-full object-cover" />
        </div>

        {/* Column 4: Image same size as Column 2 */}
        <div className="rounded-2xl overflow-hidden" style={{ alignSelf: 'flex-end', height: '70%' }}>
          <img src="/img4.jpg" alt="Man in hat" className="w-full h-full object-cover" />
        </div>

        {/* Column 5: 2 images stacked */}
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl overflow-hidden" style={{ flex: 1.6 }}>
            <img src="/img4.jpg" alt="Brain icon" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden flex-1">
            <img src="/img1.webp" alt="Bible" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Mobile View - Scrolling Horizontal */}
      <div className="lg:hidden">
        <style>{`
          @keyframes scrollRight {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .scroll-container {
            animation: scrollRight 25s linear infinite;
          }
        `}</style>
        
        <div className="overflow-hidden w-full" style={{ height: '90vh' }}>
          <div className="scroll-container flex gap-3" style={{ width: '300%' }}>
            {/* First set of images */}
            <div className="grid grid-cols-5 gap-3 flex-shrink-0" style={{ width: '50%', height: '100%' }}>
              
              {/* Column 1 */}
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl overflow-hidden" style={{ flex: 1.6 }}>
                  <img src="/img6.jpg" alt="Brain" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden flex-1">
                  <img src="/img4.jpg" alt="Image 2" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Column 2 */}
              <div className="rounded-2xl overflow-hidden" style={{ alignSelf: 'flex-end', height: '75%' }}>
                <img src="/img3.jpg" alt="Team meeting" className="w-full h-full object-cover" />
              </div>

              {/* Column 3 */}
              <div className="rounded-2xl overflow-hidden mt-50" style={{ alignSelf: 'center', height: '50%' }}>
                <img src="/img5.jpg" alt="Cyclists" className="w-full h-full object-cover" />
              </div>

              {/* Column 4 */}
              <div className="rounded-2xl overflow-hidden" style={{ alignSelf: 'flex-end', height: '70%' }}>
                <img src="/img4.jpg" alt="Man in hat" className="w-full h-full object-cover" />
              </div>

              {/* Column 5 */}
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl overflow-hidden" style={{ flex: 1.6 }}>
                  <img src="/img4.jpg" alt="Brain icon" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden flex-1">
                  <img src="/img1.webp" alt="Bible" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="grid grid-cols-5 gap-3 flex-shrink-0" style={{ width: '50%', height: '100%' }}>
              
              {/* Column 1 */}
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl overflow-hidden" style={{ flex: 1.6 }}>
                  <img src="/img6.jpg" alt="Brain" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden flex-1">
                  <img src="/img4.jpg" alt="Image 2" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Column 2 */}
              <div className="rounded-2xl overflow-hidden" style={{ alignSelf: 'flex-end', height: '75%' }}>
                <img src="/img3.jpg" alt="Team meeting" className="w-full h-full object-cover" />
              </div>

              {/* Column 3 */}
              <div className="rounded-2xl overflow-hidden mt-50" style={{ alignSelf: 'center', height: '50%' }}>
                <img src="/img5.jpg" alt="Cyclists" className="w-full h-full object-cover" />
              </div>

              {/* Column 4 */}
              <div className="rounded-2xl overflow-hidden" style={{ alignSelf: 'flex-end', height: '70%' }}>
                <img src="/img4.jpg" alt="Man in hat" className="w-full h-full object-cover" />
              </div>

              {/* Column 5 */}
              <div className="flex flex-col gap-3">
                <div className="rounded-2xl overflow-hidden" style={{ flex: 1.6 }}>
                  <img src="/img4.jpg" alt="Brain icon" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden flex-1">
                  <img src="/img1.webp" alt="Bible" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
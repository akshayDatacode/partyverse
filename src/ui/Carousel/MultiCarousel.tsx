import { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.scss';

type MultiCarouselProps = {
  children: ReactNode; // To handle any valid React children
  deviceType?: string; // Optional prop to specify the device type
  swipeable?: boolean;
  draggable?: boolean;
  showDots?: boolean;
  ssr?: boolean; // Server-side rendering
  infinite?: boolean;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  keyBoardControl?: boolean;
  customTransition?: string;
  transitionDuration?: number;
  containerClass?: string;
  removeArrowOnDeviceType?: string[];
  dotListClass?: string;
  itemClass?: string;
  responsive?: {
    [key: string]: {
      breakpoint: { max: number; min: number };
      items: number;
      slidesToSlide?: number;
    };
  };
  partialVisible?: boolean; // Optional prop for partial visibility
  centerMode?: boolean; // Optional prop for center mode
  arrows?: boolean;
};

const MultiCarousel = ({
  children,
  deviceType = 'desktop',
  swipeable = false,
  draggable = false,
  showDots = true,
  ssr = true,
  infinite = true,
  autoPlay = deviceType !== 'mobile',
  autoPlaySpeed = 1000,
  keyBoardControl = true,
  customTransition = 'all .5',
  transitionDuration = 500,
  containerClass = 'carousel-container',
  removeArrowOnDeviceType = ['tablet', 'mobile'],
  dotListClass = 'custom-dot-list-style',
  itemClass = 'carousel-item-padding-40-px',
  responsive,
  partialVisible = false,
  centerMode = false,
  arrows = true
}: MultiCarouselProps) => {

  const defaultResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <>
      <Carousel
        swipeable={swipeable}
        draggable={draggable}
        showDots={showDots}
        responsive={responsive || defaultResponsive}
        ssr={ssr}
        infinite={infinite}
        autoPlay={autoPlay}
        autoPlaySpeed={autoPlaySpeed}
        keyBoardControl={keyBoardControl}
        customTransition={customTransition}
        transitionDuration={transitionDuration}
        containerClass={containerClass}
        removeArrowOnDeviceType={removeArrowOnDeviceType}
        deviceType={deviceType}
        dotListClass={dotListClass}
        itemClass={itemClass}
        partialVisible={partialVisible}
        centerMode={centerMode}
        arrows={arrows}
      >
        {children}
      </Carousel>
    </>
  );
}

export default MultiCarousel;
import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Box, Flex, ButtonGroup, Button, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/PhotoSlider.module.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import Loading from './Loading';

const PhotoSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderLoaded, setSliderLoaded] = useState(false);
  const [slideLoaded, setSlideLoaded] = useState([])

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    created() {
      setSliderLoaded(true)
    },
    animationEnded(slider) {
      setCurrentSlide(slider.track.details.rel);
    }
  })

  useEffect(() => {
    const newlyLoaded = [...slideLoaded];
    newlyLoaded[currentSlide] = true;
    setSlideLoaded(newlyLoaded);
  }, [currentSlide])

  return (
    <Flex direction="column" align="center">
      <Box pos="relative" m="auto" w="50vw">
        <Box ref={sliderRef} className="keen-slider">
          {images.map((image, idx) => (
            <Flex key={idx} className="keen-slider__slide" justify="center">
              {slideLoaded[idx] ? (
                <Image
                  src={image.url}
                  alt="Property Image"
                  width={640}
                  height={480}
                  style={{ width: "640px", height: "480px", objectFit: "contain" }}
                />
              ) : (
                <Loading />
              )}
            </Flex>
          ))}
        </Box>
        {sliderLoaded && instanceRef.current && (
          <>
            <NextArrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide === instanceRef.current.track.details.slides.length - 1
              }
            />
            <PrevArrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={
                currentSlide === 0
              }
            />
          </>
        )}

      </Box>
      {slideLoaded && instanceRef.current && (

        <ButtonGroup
          mt="0.3rem"
          size="xs"
          spacing="0.3rem"
        >
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
            <Box
              as={Button}
              onClick={() => { instanceRef.current?.moveToIdx(idx) }}
              key={idx}
              borderRadius="full"
              isActive={idx === currentSlide}
              _hover={{backgroundColor: "gray.300"}}
              _active={{backgroundColor: "gray.500"}}
            />
          ))}
        </ButtonGroup>

      )}
    </Flex>
  )
}

const NextArrow = (props) => (
  <IconButton
    icon={<FaArrowAltCircleRight />}
    aria-label="Next"
    size="lg"
    fontSize="3xl"
    m={2}
    color="black"
    bgColor="transparent"
    className={styles.nextArrow}
    onClick={props.onClick}
    pos="absolute"
    top="50%"
    right="100%"
    isDisabled={props.disabled ? true : false}
  />
)


const PrevArrow = (props) => (
  <IconButton
    icon={<FaArrowAltCircleLeft />}
    aria-label="Previous"
    size="lg"
    fontSize="3xl"
    m={2}
    color="black"
    bgColor="transparent"
    className={styles.prevArrow}
    onClick={props.onClick}
    pos="absolute"
    top="50%"
    left="100%"
    isDisabled={props.disabled ? true : false}
  />
)


export default PhotoSlider;
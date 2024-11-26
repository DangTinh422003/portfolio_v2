'use client'
import { motion } from 'framer-motion'
import { FaArrowRightLong } from 'react-icons/fa6'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { TypeAnimation } from 'react-type-animation'

import ContentWrapper from '@/components/ContentWrapper'
import LinkButton from '@/components/LinkButton'

export default function Home() {
  return (
    <main
      className={`
        relative z-40 flex w-screen max-w-[100vw] overflow-hidden

        lg:h-screen

        xl:max-h-screen
      `}
    >
      <div
        className={`
          absolute left-0 top-0 z-0 hidden h-[200vh] w-screen translate-x-[-78%]
          rotate-[-16deg] bg-[var(--primary)]

          xl:block
        `}
      ></div>
      <ContentWrapper
        className={`
          2xl:gap-24

          xl:flex xl:gap-16
        `}
      >
        <motion.div
          whileInView={{
            translateX: [-20, 10, 0],
            opacity: [0, 1],
          }}
          animate={{
            translateX: [-20, 10, 0],
            opacity: [0, 1],
          }}
          transition={{ ease: 'easeOut', duration: 1, bounce: 0.7 }}
          className={`
            flex-center relative mt-10

            lg:w-full

            md:mt-16

            xl:mt-0 xl:w-4/12
          `}
        >
          <LazyLoadImage
            alt=""
            src="/file.png"
            effect="blur"
            wrapperClassName="relative shadow-2xl rounded-full overflow-hidden border-[2px] border-solid border-[var(--primary)] w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] xl:w-full xl:h-[35rem] xl:border-0  xl:rounded-3xl"
            className="size-full object-cover"
          />
        </motion.div>
        <div
          className={`
            flex-center

            lg:w-full

            xl:w-8/12
          `}
        >
          <div>
            <motion.h1
              whileInView={{
                y: [50, -10, 0],
                opacity: [0, 1],
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
              animate={{
                y: [50, -10, 0],
                opacity: [0, 1],
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
              className={`
                relative mt-8 text-center text-3xl font-bold leading-[1.05]

                2xl:text-6xl 2xl:leading-[1.2]

                md:mt-10 md:text-5xl

                xl:ml-10 xl:mt-0 xl:text-left xl:text-5xl
              `}
            >
              <TypeAnimation
                sequence={["I'm Dang Tinh", 1000, 'Fullstack', 1000]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className={`
                  text-[var(--primary)]

                  before:absolute before:-left-16 before:top-7 before:hidden
                  before:h-2 before:w-11 before:rounded-lg
                  before:bg-[var(--primary)] before:content-[''] before:xl:block
                `}
              />
              <br />
              Web Developer !
            </motion.h1>
            <motion.p
              whileInView={{
                y: [50, -10, 0],
                opacity: [0, 1],
                transition: {
                  delay: 0.35,
                  duration: 0.5,
                },
              }}
              animate={{
                y: [50, -10, 0],
                opacity: [0, 1],
                transition: {
                  delay: 0.35,
                  duration: 0.5,
                },
              }}
              className={`
                mt-8 text-center font-normal leading-[1.8]

                2xl:px-0 2xl:text-lg 2xl:leading-loose

                lg:px-10 lg:text-justify

                xl:pl-0 xl:pr-20 xl:text-base xl:leading-loose
              `}
            >
              Hi, I&apos;m Tinh, but you guys can call me Dang. Currently,
              i&apos;m a full-stack developer in Web 2.0 with over two years of
              experience in frontend development using Next.js and it&apos;s
              ecosystem, and backend development with Nest.js. Recently, I have
              been exploring and developing an interest in new technologies for
              blockchain programming and the Web3 ecosystem. I hope to connect
              and work with others who share the same passion for web and
              blockchain development.
            </motion.p>
            <div
              className={`
                flex-center mt-4 flex-col justify-center gap-4 pb-24

                lg:pb-0

                md:mt-8 md:flex-row md:gap-7

                xl:justify-start
              `}
            >
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  x: [-20, 0],
                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                }}
                animate={{
                  opacity: [0, 1],
                  x: [-20, 0],
                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                }}
                className={`
                  hidden

                  md:block
                `}
              >
                <LinkButton
                  icon={FaArrowRightLong}
                  title="portfolio"
                  href="/portfolio"
                />
              </motion.div>
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  x: [-20, 0],
                  transition: {
                    delay: 0.7,
                    duration: 0.5,
                  },
                }}
                animate={{
                  opacity: [0, 1],
                  x: [-20, 0],
                  transition: {
                    delay: 0.7,
                    duration: 0.5,
                  },
                }}
              >
                <LinkButton
                  icon={FaArrowRightLong}
                  title="about"
                  href="/about"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </main>
  )
}

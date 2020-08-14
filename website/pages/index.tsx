/** @jsx jsx */
import { Box, Image, Flex } from '@chakra-ui/core'
import { css, jsx } from '@emotion/core'
import { Faded } from 'baby-i-am-faded'
import {
    Button,
    Divider,
    Feature,
    Footer,
    Heading,
    Hero,
    LandingProvider,
    Link,
    NavBar,
    PatternBackground,
    TestimonialsLogos,
    FeaturesList,
    SectionTitle,
    Stack,
    PageContainer,
} from 'landing-blocks/src'
import {
    FaAngular as AngularIcon,
    FaNode as NodeIcon,
    FaReact as ReactIcon,
} from 'react-icons/fa'
import { FiGlobe, FiGrid, FiImage, FiLayers } from 'react-icons/fi'

import { GITHUB_LINK } from '../constants'
import GradientBgImg from '../public/gradient-bg.svg'
import PlayButton from '../public/play-button.svg'
import Logo from '../public/vitro_text_and_beaker.svg'
import { useEffect, useState } from 'react'
jsx

const Page = () => (
    <LandingProvider
        position='relative'
        minH='100%'
        h='100%'
        black='#333'
        primary='#4C00EB'
        color='#444'
        theme={{
            space: {
                pagePadding: '40px',
            } as any,
        }}
    >
        <MyNavbar />
        <Box
            opacity={0.8}
            mt='0px !important'
            position='absolute'
            width='100%'
            top='0px'
            zIndex={-1}
            as={GradientBgImg}
        />
        <Hero
            bullet='Introducing Vitro 1.0'
            heading={
                <Heading fontSize='3.2rem'>
                    <HeadingVerbAnimation /> components <br />
                    in isolation
                </Heading>
            }
            subheading={
                <Box lineHeight='1.6em'>
                    Vitro creates a catalog of your react components where
                    <br />
                    you can test, experiment and showcase them
                </Box>
            }
            cta={<Button>See a demo</Button>}
            // image={<Image h='200px' w='300px' src='/robot.svg' />}
            image={
                <PatternBackground
                    pattern='dotsXl'
                    color='gray.300'
                    scatter={-10}
                >
                    <Box cursor='pointer' width='160px' as={PlayButton} />
                </PatternBackground>
            }
            // cta={<Button>Try Genql in 5 minutes</Button>}
            // fingerprint='Already using Genql? Sign in'
        />
        <Divider heading='trusted by the best' />
        <Features alignSelf='center' />
        {/* <TestimonialsLogos
            animate
            // heading='Works everywhere'
            // subheading='browser and node environments'
            testimonials={[
                <Box size='80px' as={ReactIcon} />,
                <Box size='90px' as={AngularIcon} />,
                <Box size='90px' as={NodeIcon} />,
                <Box size='90px' as={AngularIcon} />,

                // <Box size='90px' as={OtherIcon} />,
            ]}
        /> */}
        <Stack spacing='20' position='relative' align='stretch'>
            <Box
                opacity={0.3}
                mt='0px !important'
                position='absolute'
                width='100%'
                bottom='0px'
                zIndex={-1}
                transform='scaleY(-1)'
                as={GradientBgImg}
            />

            <SectionTitle
                heading='Most productive way to experiment, showcase your components'
                subheading='Most productive way to experiment, showcase your components'
            />
            {/* <Box h='20px' /> */}
            <Image
                alignSelf='center'
                src='/vitro-site-mockup.jpg'
                width='800px'
                borderRadius='md'
                shadow='sm'
                opacity={0.9}
            />
        </Stack>

        <Feature
            flip
            heading='Build components seeing changes in real time'
            subheading='Vitro supports fast refresh, changes to code are instantly picked up by the UI.'
            image={
                <Image
                    src='/vitro-block.jpg'
                    borderRadius='md'
                    shadow='xl'
                    height='500px'
                />
            }
        />
        <Feature
            heading='Incremental builds for instant start up time'
            subheading={`The start up time is less than 2 seconds, you can start prototyping your react components without waiting all your code base to compile`}
            image={
                <Box overflow='hidden' mr='-60%' mb='-50%' zIndex={-2}>
                    <video
                        loop
                        autoPlay
                        muted
                        // @ts-ignore
                        css={css`
                            min-width: 800px;
                            mix-blend-mode: lighten;
                        `}
                        // borderRadius='10px'
                        src='/validation.mp4'
                    />
                </Box>
            }
        />

        {/* <Section degree={0} zIndex={1} bg='white'>
            <Banner
                //
                heading='Want to use the cli instead?'
                bullet='cli is cool too'
                subheading='You can generate the client locally based on an endpoint or a local graphql schema.'
                bg='transparent'
                image={
                    <Image
                        ml='-60px'
                        minW='300px'
                        width='500px'
                        src='/banner.jpg'
                    />
                }
                cta={
                    <a href='/docs'>
                        <Button>Read the Docs</Button>
                    </a>
                }
            />
        </Section> */}
        <MyFooter />
    </LandingProvider>
)

export function MyFooter({ ...rest }) {
    return (
        <Footer
            businessName='Vitro'
            columns={{
                Resources: [
                    <Link href={GITHUB_LINK}>Github</Link>,
                    <Link href={'/docs'}>Docs</Link>,
                ],
                'Find Us': [
                    <Link href='https://twitter.com/__morse'>Twitter</Link>,
                    <Link href='https://github.com/remorses/'>Github</Link>,
                ],
                'Who made this?': [
                    <Link href='https://twitter.com/__morse'>My Twitter</Link>,
                    <Link href='https://github.com/remorses/'>My Github</Link>,
                ],
                // 'Proudly sponsored by Vercel': [
                //     <Box as={PoweredByVercel} alignSelf='center' />,
                // ],
            }}
            {...rest}
        />
    )
}
export function MyNavbar({ ...rest }) {
    const navs = [
        <Link isExternal href={GITHUB_LINK}>
            Github
        </Link>,
        <Link isExternal href={'/docs'}>
            Docs
        </Link>,
    ]
    return (
        <NavBar
            logo={
                <Logo width='140px' />
                // <Image
                //     width='120px'
                //     stroke='#000'
                //     src='/logo_on_black.svg'
                // />
            }
            navs={navs}
            {...rest}
        />
    )
}

const HeadingVerbAnimation = (props) => {
    const texts = ['Build', 'Test', 'Showcase', 'Prototype', 'Experiment']
    const [i, setI] = useState(0)
    useEffect(() => {
        const id = setInterval(() => {
            setI((i) => (i + 1 >= texts.length ? 0 : i + 1))
        }, 1000)
        return () => {
            clearInterval(id)
        }
    })
    return (
        <Box
            transition='min-width 100ms'
            display='inline-block'
            // minWidth={texts[i].length * 0.9 + 'ch'}
            {...props}
        >
            <Faded duration={500} key={i}>
                <Box d='inline' minWidth='0px' bg='rgba(255,223,155,0.5)'>
                    {texts[i]}
                </Box>
            </Faded>
        </Box>
    )
}

export default Page

// FEATURES

export const Features = ({ ...rest }) => {
    return (
        <PageContainer>
            <Flex
                as={Faded}
                width='100%'
                // spacing='10'
                fontWeight='600'
                letterSpacing='0.06em'
                fontSize='1.4em'
                justify='space-between'
                align='center'
                flexWrap='wrap'
                {...rest}
            >
                {[
                    { heading: 'SHOWCASE', icon: ShowcaseStep },
                    { heading: 'ANALYZE', icon: AnalyzeStep },
                    { heading: 'ISOLATE', icon: IsolateStep },
                    { heading: 'COLLABORATE', icon: DeployStep },
                ].map((x) => (
                    <Stack
                        w={['100%', null, 'auto']}
                        mx={'10'}
                        my='12'
                        align='center'
                        spacing='6'
                    >
                        <Box h='80px' as={x.icon} />
                        <Box>{x.heading.toUpperCase()}</Box>
                    </Stack>
                ))}
            </Flex>
        </PageContainer>
    )
}

const AnalyzeStep = (p) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 189 131' {...p}>
            <defs>
                <linearGradient
                    id='analyze_step-a'
                    x1='50%'
                    x2='50%'
                    y1='0%'
                    y2='100%'
                >
                    <stop offset='0%' stopColor='#B0B0B0' />
                    <stop offset='100%' stopColor='#FEFEFE' stopOpacity={0} />
                </linearGradient>
            </defs>
            <g fill='none' fillRule='evenodd' transform='translate(5)'>
                <rect
                    width={126}
                    height={9}
                    x='116.304'
                    y='59.679'
                    fill='#B5B5B5'
                    transform='rotate(90 179.304 64.18)'
                />
                <rect
                    width={126}
                    height={9}
                    x='98.304'
                    y='59.679'
                    fill='#B5B5B5'
                    transform='rotate(90 161.304 64.18)'
                />
                <rect
                    width={126}
                    height={9}
                    x='80.304'
                    y='59.679'
                    fill='#B5B5B5'
                    transform='rotate(90 143.304 64.18)'
                />
                <rect
                    width={126}
                    height={113}
                    x={8}
                    y={7}
                    fill='url(#analyze_step-a)'
                    transform='rotate(90 71 63.5)'
                />
                <g
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={9}
                    transform='translate(0 47)'
                >
                    <circle cx={35} cy={35} r={35} />
                    <line x1={79} x2={60} y1={79} y2={60} />
                </g>
            </g>
        </svg>
    )
}

const IsolateStep = (p) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 131 122' {...p}>
            <defs>
                <linearGradient
                    id='isolate_step-a'
                    x1='50%'
                    x2='50%'
                    y1='0%'
                    y2='100%'
                >
                    <stop offset='0%' stopColor='#B0B0B0' />
                    <stop offset='100%' stopColor='#FEFEFE' stopOpacity={0} />
                </linearGradient>
            </defs>
            <g fill='none' fillRule='evenodd' transform='translate(4)'>
                <rect width={82} height={9} x='44.679' fill='#B5B5B5' />
                <rect width={82} height={9} x='44.679' y={18} fill='#B5B5B5' />
                <rect
                    width={126}
                    height={84}
                    y='38.304'
                    fill='url(#isolate_step-a)'
                />
                <g
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={10}
                    transform='translate(1 9)'
                >
                    <polyline points='0 89 45 44.5 0 0' />
                    <line x1={60} x2={121} y1='103.5' y2='103.5' />
                </g>
            </g>
        </svg>
    )
}

const ShowcaseStep = (p) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 185 124' {...p}>
            <defs>
                <linearGradient
                    id='showcase_step-a'
                    x1='50%'
                    x2='50%'
                    y1='0%'
                    y2='100%'
                >
                    <stop offset='0%' stopColor='#B0B0B0' />
                    <stop offset='100%' stopColor='#FEFEFE' stopOpacity={0} />
                </linearGradient>
            </defs>
            <g fill='none' fillRule='evenodd'>
                <rect
                    width={65}
                    height={68}
                    x={120}
                    y={56}
                    fill='url(#showcase_step-a)'
                />
                <rect width={91} height={9} x={94} fill='#B5B5B5' />
                <rect width={91} height={9} x={94} y={18} fill='#B5B5B5' />
                <rect width={91} height={9} x={94} y={36} fill='#B5B5B5' />
                <path
                    fill='currentColor'
                    fillRule='nonzero'
                    d='M28.6925795,120 L28.6925795,116.780276 C25.3003534,116.432197 22.991755,115.91008 21.7667845,115.213923 C19.7879859,114.053662 18.7985866,111.965192 18.7985866,108.948513 C18.7985866,107.440174 19.163722,105.395214 19.8939929,102.813633 C20.6242638,100.232052 22.8739694,93.11095 26.6431095,81.4503263 L26.6431095,81.4503263 L64.5229682,81.4503263 L70.5300353,98.5931835 C71.3780919,101.029732 72.0376914,103.350254 72.5088339,105.55475 C72.9799764,107.759246 73.2155477,109.296592 73.2155477,110.166788 C73.2155477,112.777375 72.6030624,114.416244 71.3780919,115.083394 C70.1531213,115.750544 67.4204947,116.316171 63.180212,116.780276 L63.180212,116.780276 L63.180212,120 L100,120 L100,116.780276 C96.6077739,116.200145 94.1931684,115.1124 92.7561837,113.517041 C91.3191991,111.921682 89.3992933,107.759246 86.9964664,101.029732 L86.9964664,101.029732 L50.9540636,0 L48.1272085,0 L17.95053,87.4546773 C13.4275618,100.565627 10.2355713,108.600435 8.3745583,111.559101 C6.51354535,114.517766 3.72202591,116.258158 0,116.780276 L0,116.780276 L0,120 L28.6925795,120 Z M63,75 L30,75 L46.3949045,26 L63,75 Z'
                />
            </g>
        </svg>
    )
}

const DeployStep = (p) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 213 131' {...p}>
            <defs>
                <linearGradient
                    id='deploy_step-a'
                    x1='50%'
                    x2='50%'
                    y1='0%'
                    y2='100%'
                >
                    <stop offset='0%' stopColor='#B0B0B0' />
                    <stop offset='100%' stopColor='#FEFEFE' stopOpacity={0} />
                </linearGradient>
            </defs>
            <g fill='none' fillRule='evenodd' transform='translate(4)'>
                <rect width={93} height={9} x='115.679' fill='#B5B5B5' />
                <rect width={93} height={9} x='115.679' y={18} fill='#B5B5B5' />
                <rect
                    width={126}
                    height={89}
                    x={82}
                    y='38.304'
                    fill='url(#deploy_step-a)'
                />
                <g
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={9}
                    transform='translate(0 18)'
                >
                    <polyline points='91 78 67 54 43 78' />
                    <line x1={67} x2={67} y1={54} y2={108} />
                    <path d='M117.34,92.34 C129.378327,85.7770535 135.435239,71.8875695 132.053243,58.6001437 C128.671246,45.3127179 116.711072,36.0090525 103,36 L95.44,36 C90.4664869,16.7628886 74.1545876,2.57865443 54.413221,0.324605772 C34.6718545,-1.92944288 15.5823947,8.21270098 6.40047695,25.8335601 C-2.78144079,43.4544191 -0.157526398,64.9110179 13,79.8' />
                    <polyline points='91 78 67 54 43 78' />
                </g>
            </g>
        </svg>
    )
}
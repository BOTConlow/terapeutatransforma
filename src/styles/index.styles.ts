import { displayPartsToString } from "typescript";
import { styled } from "./stitches.config";


export const MainContainer = styled('main', {

    width: '100vw',
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

})

export const Header = styled('header', {

    width: '100vw',
    background: 'linear-gradient(180deg, #557c93, #08203e)',
    padding: '1.3rem 0',

})

export const HeaderContainer = styled('div', {

    maxWidth: '900px',
    margin: '0 auto',
    color: '#fff',
    fontSize: '.7rem',
    textAlign: 'center',
    fontWeight: 'bold',

})

export const Headline = styled('div', {

    backgroundSize: 'cover',
    width: '100vw',
    height: '32rem',
})

export const HeadlineContainer = styled('div', {

    maxWidth: '1120px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#fff',

    h1: {
        fontSize: '3rem',
        fontWeight: '700',
        lineHeight: '110%',
        margin: '4rem 2rem',
    },

    p: {
        color: '#D0D0FF',
        fontSize: '1.25rem',
    }

})

export const SecondHeadline = styled('div', {

    width: '100vw',
    height: '31rem',
    background: '#EBEBEB',

})

export const SecondHeadlineContainer = styled('div', {

    maxWidth: '1120px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#000',
    fontSize: '1.25rem',
    fontWeight: '500',
    marginTop: '-8rem',

})

export const Mensage = styled('div', {

    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',

    variants: {

        color: {

            frst: {
                padding: '4rem 0 5rem',
                background: '#C0CD99',
                fontSize: '1.55rem',
                gap: '2.5rem',
            },

            scnd: {
                padding: '5.75rem 0',
                background: '#C3C3C3',
                fontSize: '2.5rem',
                gap: '4.2rem',
            },

            thrd: {
                padding: '5.75rem 0',
                background: '#60B0D9',
                fontSize: '1.7rem',
                gap: '1.6rem',

                h1: {
                    fontSize: '5rem',
                    color: '#00FFF0',
                    transition: 'all 300ms ease',

                    '&:hover': {
                        transform: 'scale(1.15)',
                    }
                }
            },

            fhrt: {
                padding: '3.5rem 0',
                background: '#262E61',
                fontSize: '2.5rem',
            },

            fifth: {
                padding: '3.5rem 0',
                background: '#161528',
                fontSize: '2.5rem',
            }

        }
    }

})

export const GuiaContainer = styled('div', {

    maxWidth: '1120px',
    padding: '4rem 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: '3.75rem',
    color: '#000',

    h1: {
        fontSize: '2.62rem',
    },

    h3: {
        fontWeight: 'normal',
    }

})

export const BoxGuiaContainer = styled('div', {

    display: 'flex',
    alignItems: 'center',
    gap: '5rem',

    svg: {
        color: '#60B0D9',
        transition: 'all 300ms ease',

        '&:hover': {
            transform: 'scale(1.10)',
        }
    }

})

export const BoxGuia = styled('div', {

    maxWidth: '17rem',
    border: '1px solid #cccccc',
    padding: '1rem',
    borderRadius: '20px',
    boxShadow: '10px 10px 10px 0px  #cccccc',
    transition: 'all 300ms ease',

    img: {
        marginBottom: '2.3rem',
    },

    h1: {
        color: '#60B0D9',
        fontSize: '1.75rem',
        marginBottom: '1rem',
    },

    '&:hover': {
        transform: 'scale(1.05)',
    }

})

export const BonusContainer = styled('div', {

    maxWidth: 1120,
    padding: '5rem 0',
    gap: '9rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

})

export const BonusBox = styled('div', {

    display: 'flex',
    alignItems: 'center',
    gap: '2rem',

})

export const BonusTitle = styled('div', {

    color: '#272D3E',
    gap: '1rem',

    h1: {
        fontSize: '2.7rem',
        fontWeight: 600,
        lineHeight: '96%',
        marginBottom: '1.5rem',
    },

    h2: {
        letterSpacing: 1.4,
        fontSize: '.8rem',
    },

    p: {
        lineHeight: '187%,',
        marginBottom: '2.5rem',
    }

})

export const BonusHeadline = styled('div', {

    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '.8rem',

    variants: {

        type: {

            frst: {
                color: '#6C35E0',
            },

            scnd: {
                color: '#60B0D9',
            },

            thrd: {
                color: '#FEBE10',
            },

        }
    }

})

export const Separator2 = styled('div', {

    variants: {

        type: {

            frst: {
                width: '1.9rem',
                height: 2.1,
            },

            scnd: {
                width: 1,
                height: '3.25rem',
                background: '#fff',
                opacity: 0.30
            },

        },

        color: {

            frst: {
                background: '#6C35E0',
            },

            scnd: {
                background: '#60B0D9',
            },

            thrd: {
                background: '#FEBE10',
            },

        }
    }

})

export const ImageComponent = styled('div', {

    width: '37rem',
    padding: '2rem',
    borderRadius: 21,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '-7.5rem',
    transition: 'all 300ms ease',

    '&:hover': {
        transform: 'scale(1.05)',
    },

    variants: {

        color: {

            frst: {
                background: '#6C35E0',
                boxShadow: '10px 10px 23px 0px #4d25a1',
            },

            scnd: {
                background: '#60B0D9',
                boxShadow: '10px 10px 23px 0px #375e91',
            },

            thrd: {
                background: '#FEBE10',
                boxShadow: '10px 10px 23px 0px #e47c34',
            },

        }
    }

})
export const ImageContainer = styled('div', {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

})


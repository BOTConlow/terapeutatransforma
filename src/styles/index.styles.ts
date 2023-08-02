import { styled } from './stitches.config'

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
})

export const HeaderContainer = styled('div', {
  maxWidth: 750,
  margin: '0 auto',
  color: '#fff',
  fontSize: '.7rem',
  textAlign: 'center',
  fontWeight: 'bold',
  padding: '1.3rem 1rem',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
    fontSize: '.4rem',
    padding: '1rem',
  },
})

export const Headline = styled('div', {
  backgroundSize: 'cover',
  width: '100vw',
  height: '32rem',

  '@media (max-width: 768px)': {
    height: '21rem',
  },
})

export const HeadlineContainer = styled('div', {
  maxWidth: '730px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  textAlign: 'center',
  color: '#fff',
  padding: '4rem 1rem 0rem 1rem',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
    padding: '2rem 1rem 0rem 1rem',
    gap: '2rem',
  },

  h1: {
    fontSize: '3rem',
    fontWeight: '700',
    lineHeight: '110%',

    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },

  p: {
    color: '#D0D0FF',
    fontSize: '1.25rem',

    '@media (max-width: 768px)': {
      fontSize: '.9rem',
    },
  },
})

export const SecondHeadline = styled('div', {
  width: '100vw',
  height: '31rem',
  background: '#EBEBEB',

  '@media (max-width: 768px)': {
    height: '23rem',
  },
})

export const SecondHeadlineContainer = styled('div', {
  maxWidth: '1120px',
  margin: '0 auto',
  textAlign: 'center',
  color: '#000',
  fontSize: '1.25rem',
  fontWeight: '500',
  marginTop: '-8rem',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
    padding: '1rem',
  },

  img: {
    '@media (max-width: 768px)': {
      width: '20rem',
      height: '20rem',
    },
  },
})

export const MensageContainer = styled('div', {
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  variants: {
    background: {
      first: {
        background: '#C0CD99',
      },

      scnd: {
        background: '#C3C3C3',
      },

      thrd: {
        background: '#60B0D9',
      },

      fhrt: {
        background: '#262E61',
      },

      fifth: {
        background: '#161528',
      },

      sixth: {
        background: '#60B0D9',
      },

      seventh: {
        background: '#FAFAFA',
      },

      eighth: {
        background: '#EBEBEB',
      },
    },
  },
})

export const Mensage = styled('div', {
  maxWidth: 1120,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontWeight: 'bold',

  '@media (max-width: 768px)': {
    width: '100%',
  },

  variants: {
    type: {
      first: {
        padding: '4rem 1rem 5rem 1rem',
        fontSize: '1.55rem',
        gap: '2.5rem',

        '@media (max-width: 768px)': {
          padding: '3rem 1rem',
          fontSize: '.7em',
          gap: '1rem',
        },
      },

      scnd: {
        padding: '4rem 0',
        fontSize: '2.4rem',
        gap: '3rem',

        '@media (max-width: 768px)': {
          padding: '2rem 1rem',
          fontSize: '1.2rem',
          gap: '1rem',
          textAlign: 'center',

          img: {
            '@media (max-width: 768px)': {
              width: '20rem',
              height: '2.5rem',
            },
          },
        },
      },

      thrd: {
        padding: '5.75rem 0',
        fontSize: '1.7rem',
        gap: '1.6rem',

        h1: {
          fontSize: '5rem',
          color: '#00FFF0',
          transition: 'all 300ms ease',

          '@media (max-width: 768px)': {
            fontSize: '3rem',
          },

          '&:hover': {
            transform: 'scale(1.15)',
          },
        },

        '@media (max-width: 768px)': {
          padding: '2rem 1rem',
          fontSize: '.7rem',
          gap: '1rem',
        },
      },

      fhrt: {
        padding: '3.5rem 0',
        fontSize: '2.5rem',

        '@media (max-width: 768px)': {
          padding: '2rem 1rem',
          fontSize: '.9rem',
        },
      },

      fifth: {
        padding: '3.5rem 0',
        fontSize: '2.5rem',

        '@media (max-width: 768px)': {
          padding: '2rem 0',
          fontSize: '1.1rem',
        },
      },

      sixth: {
        maxWidth: '50rem',
        padding: '3.5rem 0',
        gap: '2rem',

        '@media (max-width: 768px)': {
          padding: '2rem 1rem 3rem',
          gap: '1rem',
        },

        h1: {
          fontSize: '3rem',

          '@media (max-width: 768px)': {
            fontSize: '1.5rem',
          },
        },

        p: {
          fontWeight: '500',

          '@media (max-width: 768px)': {
            fontSize: '.9rem',
          },
        },
      },

      seventh: {
        maxWidth: '66rem',
        color: '#000',
        padding: '3rem 1rem 4rem 1rem',
        gap: '2rem',

        '@media (max-width: 768px)': {
          padding: '2rem 1rem',
          gap: '1rem',
        },

        h1: {
          fontSize: '3rem',

          '@media (max-width: 768px)': {
            fontSize: '1.3rem',
          },
        },

        p: {
          fontWeight: '500',

          '@media (max-width: 768px)': {
            fontSize: '.7rem',
          },
        },

        img: {
          '@media (max-width: 768px)': {
            width: '15.8rem',
            height: '12rem',
          },
        },
      },

      eighth: {
        color: '#000',
        padding: '3rem 0 2rem',
        gap: '3rem',

        '@media (max-width: 768px)': {
          gap: '1rem',
        },

        img: {
          width: 460,
          height: 170,

          '@media (max-width: 768px)': {
            width: '16rem',
            height: '8rem',
          },
        },

        h1: {
          fontSize: '3rem',

          '@media (max-width: 768px)': {
            fontSize: '1.8rem',
          },
        },
      },
    },
  },
})

export const GuiaContainer = styled('div', {
  maxWidth: 1120,
  padding: '4rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  gap: '3.75rem',
  color: '#000',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
    padding: '3rem 1rem',
    gap: '2rem',
  },
})

export const GuiaContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.75rem',

  img: {
    '@media (max-width: 768px)': {
      width: '20rem',
      height: '2.5rem',
    },
  },

  h1: {
    fontSize: '2.62rem',

    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },

  h3: {
    fontWeight: 'normal',

    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },

  '@media (max-width: 768px)': {
    gap: '2rem',
  },
})

export const BoxGuiaContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '5rem',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '2.5rem',
  },

  svg: {
    color: '#60B0D9',
    transition: 'all 300ms ease',

    '&:hover': {
      transform: 'scale(1.10)',
    },
  },
})

export const BoxGuia = styled('div', {
  maxWidth: '17rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #cccccc',
  padding: '1.5rem 1rem',
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
  },
})

export const BonusContainer = styled('div', {
  maxWidth: 1120,
  padding: '5rem 1rem',
  gap: '9rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@media (max-width: 768px)': {
    padding: '3rem 1rem',
    gap: '3rem',
  },
})

export const BonusBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  variants: {
    type: {
      normal: {
        '@media (max-width: 768px)': {
          flexDirection: 'column',
        },
      },
      inverse: {
        '@media (max-width: 768px)': {
          flexDirection: 'column-reverse',
        },
      },
    },
  },

  defaultVariants: {
    type: 'inverse',
  },
})

export const BonusTitle = styled('div', {
  color: '#272D3E',
  gap: '1rem',

  h1: {
    fontSize: '2.7rem',
    fontWeight: 600,
    lineHeight: '96%',

    '@media (max-width: 768px)': {
      fontSize: '1.7rem',
    },
  },

  h2: {
    letterSpacing: 1.4,
    fontSize: '.8rem',
  },

  p: {
    lineHeight: '187%,',
  },
})

export const BonusDesc = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
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
    },
  },
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
        opacity: 0.3,
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
    },
  },
})

export const ImageComponent = styled('div', {
  width: '37rem',
  padding: '2rem',
  borderRadius: 21,
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '-6rem',
  transition: 'all 300ms ease',
  zIndex: 1000,

  '@media (max-width: 768px)': {
    width: '22rem',
    marginTop: '-4rem',
  },

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
    },
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    borderRadius: 30,
    transform: 'rotate(10deg)',
    '@media (max-width: 768px)': {
      width: '18rem',
      height: '23rem',
    },
  },
})

export const RevisaoContainer = styled('div', {
  maxWidth: 1120,
  padding: '5rem 0',
  gap: '4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@media (max-width: 768px)': {
    padding: '2rem 1rem',
    gap: '2rem',
  },
})

export const RevisaoHeadline = styled('div', {
  background: '#FF0000',
  width: '56rem',
  padding: '2.5rem 1rem',
  borderRadius: 20,
  fontWeight: 700,
  fontSize: 17,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  transition: 'all 300ms ease',
  boxShadow: '10px 10px 23px 0px #ad0202',

  '&:hover': {
    transform: 'scale(1.05)',
  },

  '@media (max-width: 768px)': {
    fontSize: '1rem',
    width: '100%',
    padding: '2rem 1rem',
  },
})

export const RevisaoImages = styled('div', {
  display: 'flex',
  gap: '2rem',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },

  img: {
    boxShadow: '30px 30px 36px 0px rgba(0, 0, 0, 0.25)',
    background: '#ccc',
    borderRadius: 40,
    transition: 'all 300ms ease',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
})

export const LastChance = styled('div', {
  maxWidth: 1120,
  padding: '5rem 0',
  gap: '3rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#000',

  '@media (max-width: 768px)': {
    padding: '2rem 1rem',
    gap: '1rem',
  },
})

export const LastChanceHeadline = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  h1: {
    color: '#272D3E',
    fontSize: '3rem',
    lineHeight: '110%',
    textAlign: 'center',

    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },

  p: {
    width: '12rem',
    borderRadius: 100,
    padding: '0.6rem 1.25rem',
    background: '#C6F4F8',
    color: '#00BAC7',
    textAlign: 'center',
    marginBottom: '2rem',
  },
})

export const FaqboxContainer = styled('div', {
  width: '100%',
  padding: '4rem 1rem',
  display: 'flex',
  justifyContent: 'center',
  background: 'linear-gradient(90deg, #0F2027, #203A43, #2C5364)',
})

export const FaqboxContent = styled('div', {
  maxWidth: 1120,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',

  h1: {
    textShadow: '2px 2px 2px rgba(0, 0, 0, 0.50)',
    fontSize: '3rem',
    textAlign: 'center',

    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
})

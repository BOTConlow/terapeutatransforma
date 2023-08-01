import { styled } from '../../styles/stitches.config'

export const DepoimentosContainer = styled('div', {
  maxWidth: 1120,
  color: '#000',
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',

  padding: '5rem 0',

  '@media (max-width: 768px)': {
    maxWidth: 400,
    padding: '2rem 1rem',
    fontSize: '1.1rem',
  },

  img: {
    borderRadius: 35,
    padding: '1rem',
    transition: 'all 300ms ease',

    '&:hover': {
      transform: 'scale(1.02)',
    },
  },

  p: {
    marginBottom: '2rem',
  },
})

export const ImageSecion = styled('div', {
  boxShadow: 'inset 0px 0px 22px -3px rgba(0,0,0,0.75)',
  borderRadius: 35,
  padding: '.2rem .2rem 0 .2rem',
})

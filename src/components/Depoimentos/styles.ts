import { styled } from '../../styles/stitches.config'

export const DepoimentosContainer = styled('div', {
  maxWidth: 1120,
  color: '#000',
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',

  padding: '5rem 0',
  gap: '5rem',

  img: {
    borderRadius: 35,
    maxWidth: '100%',
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

import { styled } from '../../styles/stitches.config'

export const ButtonContainer = styled('a', {
  button: {
    background: 'linear-gradient(90deg, #29cf83, #31df80)',
    boxShadow: '8px 8px 10px #22b572',
    fontSize: '2rem',
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.31)',
    color: '#fff',
    borderRadius: 10,
    border: 0,
    padding: '1rem 5rem',
    transition: 'all 300ms ease-in-out',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
})

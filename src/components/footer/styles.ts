import { styled } from '../../styles/stitches.config'

export const FooterContainer = styled('footer', {
  width: '100vw',
  backgroundColor: '#0a0b13',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem 0',
})

export const FooterContent = styled('div', {
  maxWidth: 1120,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',
})

export const FooterFirst = styled('div', {
  display: 'flex',
  gap: '4rem',
})

export const FirstContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  a: {
    color: '#fff',
  },
})

export const FooterSecond = styled('div', {
  color: '#7A7A7A',
  textAlign: 'center',
  fontWeight: '400',
  fontSize: '.8rem',
})

export const Contact = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.9rem',

  p: {
    fontWeight: '200',
  },
})

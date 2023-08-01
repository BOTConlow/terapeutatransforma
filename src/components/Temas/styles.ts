import { styled } from '../../styles/stitches.config'

export const TemasContainer = styled('div', {
  maxWidth: '1120px',
  padding: '4rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#000',
  gap: '4rem',

  '@media (max-width: 768px)': {
    padding: '3rem 1rem',
    gap: '3rem',
  },
})

export const SphereContent = styled('div', {
  gap: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',

  h1: {
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },

  '@media (max-width: 768px)': {
    img: {
      widht: '9rem',
      height: '9rem',
    },
  },
})

export const TemasContent = styled('div', {
  width: '46rem',
  borderRadius: 20,
  boxShadow: '0px 0px 29px 0px rgba(0,0,0,0.75)',

  '@media (max-width: 768px)': {
    width: '100vw',
  },
})

export const MolduraRec = styled('div', {
  height: '1.7rem',
  background: 'linear-gradient(90deg, #77B0ED, #213989)',
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,

  borderBottomLeftRadius: '100%',
  borderBottomRightRadius: '100%',
})

export const TemasBox = styled('div', {
  padding: '3rem 2rem',
  margin: '0 auto',

  '@media (max-width: 768px)': {
    padding: '2rem 1rem',
  },
})

export const BoxTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#413F3F',
  gap: '1rem',

  h1: {
    fontSize: '1.75rem',

    '@media (max-width: 768px)': {
      fontSize: '1.1rem',
    },
  },

  '@media (max-width: 768px)': {
    img: {
      width: '2rem',
      height: '2rem',
    },

    svg: {
      width: '1rem',
      height: '1rem',
    },
  },
})

export const Separator = styled('div', {
  width: '12rem',
  height: 2,
  background: '#BCBCC3',

  '@media (max-width: 768px)': {
    width: '1.5rem',
  },
})

export const CheckContainer = styled('div', {
  background: '#e0e0e0',
  borderRadius: '10px',
  padding: '.5rem 1rem',
  gap: '1rem',
  margin: '2rem 0',
  display: 'flex',
  alignItems: 'center',

  p: {
    width: '100%',
  },
})

export const Check = styled('div', {
  width: '2.3rem',
  height: '2.3rem',
  background: '#60B0D9',
  borderRadius: '11px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '3.70px solid #B5B5BA',
})

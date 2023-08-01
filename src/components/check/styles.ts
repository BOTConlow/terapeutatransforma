import { styled } from '../../styles/stitches.config'

export const CheckContainer = styled('div', {
  Width: '40rem',
  background: '#e0e0e0',
  color: '#000',
  borderRadius: '10px',
  padding: '1rem',
  gap: '1rem',
  margin: '2rem 0',
  display: 'flex',
  alignItems: 'center',

  p: {
    width: '100%',
  },
})

export const CheckContent = styled('div', {
  width: '2.3rem',
  height: '2.3rem',
  background: '#60B0D9',
  borderRadius: '11px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '3.70px solid #B5B5BA',
})
